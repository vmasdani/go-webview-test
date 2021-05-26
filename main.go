package main

import (
	"os"
	"fmt"

	"github.com/webview/webview"
)

func main() {
	debug := true
	w := webview.New(debug)
	defer w.Destroy()
	w.SetTitle("Minimal webview example")
	w.SetSize(800, 600, webview.HintNone)

	// Get working directory
	path, err := os.Getwd()

	if err != nil {
		panic(err)
	}

	fmt.Println("cwd:", path)

	w.Navigate("file://" + path + "/index.html")
	w.Run()
}
