# structure

``` bash
.
├── Cargo.lock
├── Cargo.toml
├── src/
│   ├── lib.rs
│   ├── main.rs
│   └── bin/
│       ├── named-executable.rs
│       ├── another-executable.rs
│       └── multi-file-executable/
│           ├── main.rs
│           └── some_module.rs
├── benches/
│   ├── large-input.rs
│   └── multi-file-bench/
│       ├── main.rs
│       └── bench_module.rs
├── examples/
│   ├── simple.rs
│   └── multi-file-example/
│       ├── main.rs
│       └── ex_module.rs
└── tests/
    ├── some-integration-tests.rs
    └── multi-file-test/
        ├── main.rs
        └── test_module.rs
```

Cargo.toml并Cargo.lock存储在包的根目录中（包根目录）。

源代码在src目录中。

默认库文件是src/lib.rs.

默认的可执行文件是src/main.rs.

其他可执行文件可以放在src/bin/.

基准在benches目录中。

示例进入examples目录。

集成测试进入tests目录。
