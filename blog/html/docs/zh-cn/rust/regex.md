# regex

正则

> dependencies

``` toml
[dependencies]
regex="0.1.41"
```

> example

``` rs
use regex::Regex;

fn main() {
	let re = Regex::new(r"^\d{4}-\d{2}-\d{2}$").unwrap();
	println!("Did our date match? {}", re.is_match("2014-01-01"))
}
```
