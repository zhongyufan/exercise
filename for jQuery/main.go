package main

import (
	"fmt"
	"html/template"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
)

func helloWorld(w http.ResponseWriter, r *http.Request) {
	// 路由
	// r.ParseForm()
	fmt.Fprintf(w, "Hello Wrold!")
}

// 第一次，用于请求网页
func AJAX(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("AJAX.html")
	t.Execute(w, nil)
}

// 第二次，用于判断登录用户名密码是否正确
func login(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}

	if r.Form["username"][0] == "aaa" && r.Form["password"][0] == "bbb" {
		fmt.Fprintf(w, "登录成功")
	} else {
		fmt.Fprintf(w, "登录失败")
	}
}

//  构造一个返回含有ContentType是json的json
//func datajson(w http.ResponseWriter, r *http.Request) {
//	r.ParseForm()
//	w.Header().Set("Content-Type", "application/json")
//	t, _ := template.ParseFiles("./html/data.json")
//	t.Execute(w, nil)
//}
func ajax(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	// 我们要区别 get 和 post
	// get
	for k, v := range r.URL.Query() {
		fmt.Println("get key:", k)
		fmt.Println("get val:", strings.Join(v, ""))
	}
	// post
	for k, v := range r.PostForm {
		fmt.Println("post key:", k)
		fmt.Println("post val:", strings.Join(v, ""))
	}

	p1, _ := strconv.ParseInt(r.Form["p1"][0], 10, 32)
	p2, _ := strconv.ParseInt(r.Form["p2"][0], 10, 32)

	sum := p1 + p2

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, "{\"SUM:\":%d}", sum)
}

func ajaxCrossDomain(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	// 我们要区别 get 和 post
	// get
	for k, v := range r.URL.Query() {
		fmt.Println("get key:", k)
		fmt.Println("get val:", strings.Join(v, ""))
	}
	// post
	for k, v := range r.PostForm {
		fmt.Println("post key:", k)
		fmt.Println("post val:", strings.Join(v, ""))
	}

	p1, _ := strconv.ParseInt(r.Form["p1"][0], 10, 32)
	p2, _ := strconv.ParseInt(r.Form["p2"][0], 10, 32)
	callback := r.Form["callback"][0]
	sum := p1 + p2

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, "run('{\"SUM:\":%d}'", callback, sum)
}

func upload(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	destLocalPath := "./html/file/"
	// 文件大小
	r.ParseMultipartForm(32 << 20)

	clientfd, handler, err := r.FormFile("uploadfile")

	if err != nil {
		fmt.Println(err)
		fmt.Fprintf(w, "read failed.")
		return
	}
	defer clientfd.Close()

	localpat := fmt.Sprintf("%s%s", destLocalPath, handler.Filename)

	localfd, err := os.OpenFile(localpat, os.O_WRONLY|os.O_CREATE, 0666)

	if err != nil {
		fmt.Println(err)
		fmt.Fprintf(w, "read file failed.")
		return
	}

	defer clientfd.Close()

	io.Copy(localfd, clientfd)
	fmt.Fprintf(w, "upload finish.")
}

func main() {
	// fmt.Println("Hello wrold!")
	http.HandleFunc("/helloWorld", helloWorld)

	// 例子，解释get和post的区别
	http.HandleFunc("/AJAX", AJAX)
	http.HandleFunc("/login", login)

	// 支持静态文件的访问
	//一个路由和整个目录的关系			改变根目录			文件			这个文件夹
	http.Handle("/html/", http.StripPrefix("/html/", http.FileServer(http.Dir("html"))))

	// 支持p1以及p2参数的路由
	http.HandleFunc("/ajax", ajax)

	// 支持跨域调用的p1以及p2参数的路由
	http.HandleFunc("/ajaxCrossDomain", ajaxCrossDomain)

	// 支持上传文件的路由
	http.HandleFunc("/upload", upload)
	//ContentType是json的json
	//http.HandleFunc("/datajson", datajson)

	// 监听
	err := http.ListenAndServe(":9092", nil) // 服务器端的监听端口
	if err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}
