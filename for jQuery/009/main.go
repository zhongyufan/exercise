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

	fmt.Fprintf(w, "Hello World!")
}

// 例子：用于说明GET和POST的区别
// 第一次，用于请求网页
func index(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("index-01-getAndPost.html")
	t.Execute(w, nil)
}

// 第二次，用于判断登录用户名密码是否正确
func login(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	for k, v := range r.Form {
		fmt.Println("    key: ", k)
		fmt.Println("    val: ", strings.Join(v, ""))
	}

	if r.Form["username"][0] == "aaa" && r.Form["password"][0] == "bbb" {
		fmt.Fprintf(w, "登陆成功")
	} else {
		fmt.Fprintf(w, "登录失败")
	}
}

// 构造一个返回含有ContentType是json的json
func datajson(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	w.Header().Set("Content-Type", "application/json")
	t, _ := template.ParseFiles("./html/data.json")
	t.Execute(w, nil)
}

func ajax(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	// 我们要区别 get 和 post 区别
	// get
	for k, v := range r.URL.Query() {
		fmt.Println("   get key: ", k)
		fmt.Println("   get val: ", strings.Join(v, ""))
	}

	// post
	for k, v := range r.PostForm {
		fmt.Println("   post key: ", k)
		fmt.Println("   post val: ", strings.Join(v, ""))
	}

	p1, _ := strconv.ParseInt(r.Form["p1"][0], 10, 32)
	p2, _ := strconv.ParseInt(r.Form["p2"][0], 10, 32)

	sum := p1 + p2

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, "{\"SUM\":%d}", sum)
}

func ajaxCrossDomain(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	// 我们要区别 get 和 post 区别
	// get
	for k, v := range r.URL.Query() {
		fmt.Println("   get key: ", k)
		fmt.Println("   get val: ", strings.Join(v, ""))
	}

	// post
	for k, v := range r.PostForm {
		fmt.Println("   post key: ", k)
		fmt.Println("   post val: ", strings.Join(v, ""))
	}

	p1, _ := strconv.ParseInt(r.Form["p1"][0], 10, 32)
	p2, _ := strconv.ParseInt(r.Form["p2"][0], 10, 32)
	callback := r.Form["callback"][0]

	sum := p1 + p2

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, "%s('{\"SUM\":%d}')", callback, sum)
}

func upload(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	destLocalPath := "./html/file/"

	r.ParseMultipartForm(32 << 20)

	clientfd, handler, err := r.FormFile("uploadfile")

	if err != nil {
		fmt.Println(err)
		fmt.Fprintf(w, "read failed.")
		return
	}

	defer clientfd.Close()

	localpath := fmt.Sprintf("%s%s", destLocalPath, handler.Filename)

	localfd, err := os.OpenFile(localpath, os.O_WRONLY|os.O_CREATE, 0666)

	if err != nil {
		fmt.Println(err)
		fmt.Fprintf(w, "open file failed.")
		return
	}

	defer localfd.Close()

	io.Copy(localfd, clientfd)
	fmt.Fprintf(w, "upload finish.")
}

func main() {
	//	fmt.Println("Hello World!")
	http.HandleFunc("/helloWorld", helloWorld)

	// 例子：用于说明GET和POST的区别
	http.HandleFunc("/index", index)
	http.HandleFunc("/login", login)

	// 支持静态文件的访问
	http.Handle("/html/", http.StripPrefix("/html/", http.FileServer(http.Dir("html"))))

	// 支持p1以及p2参数的路由
	http.HandleFunc("/ajax", ajax)

	// 支持跨域调用的p1以及p2参数的路由
	http.HandleFunc("/ajaxCrossDomain", ajaxCrossDomain)

	// 支持上传文件
	http.HandleFunc("/upload", upload)

	// ContentType是json的json
	http.HandleFunc("/datajson", datajson)

	err := http.ListenAndServe(":9092", nil) // 服务器端的监听端口
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
