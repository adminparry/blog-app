# rust

https://www.rust-lang.org/

> install
``` bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo --version
```

> generating a new project
``` bash
cargo new hello-rust
cd hello-rust
tree .
cargo run

```

> build
``` bash
cargo build
./target/debug/hello-rust
```

> dependencies

``` toml
[package]
name = "hello"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]

```

> 包和crate
> 泛型和trait
> 智能指针
> 变量
可变的量必须由mut修饰

> 闭包
闭包的定义以一对竖线（|）开始，在竖线中指定闭包的参数；
> 切片类型

``` rs
fn main() {
    let s = String::from("broadcast");

    let part1 = &s[0..5];
    let part2 = &s[5..9];

    println!("{}={}+{}", s, part1, part2);
}

```
