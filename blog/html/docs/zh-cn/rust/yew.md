# yew

https://github.com/yewstack/yew

> example
``` rs
use yew::prelude::*;

enum Msg {
	AddOne,
}
struct Model {
	value: i64,
}
impl Component for Model {
	type Message = Msg;
	type Properties = ();
	
	fn create(ctx: &Context<Self>) -> Self {
		Self {
			value: 0,
		}
	}
	fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
		match msg {
			Msg::AddOne => {
				self.value += 1;
				true
			}
		}
	}
	fn view(&self, ctx: &Context<Self>) -> Html {
		html! {
			<div>
				<button onclick={ctx.link().callback(|_| Msg::AddOne)}{"+1"}</button>
				<p>{ self.value }</p>
			</div>
		}
	}
}

fn main(){
	yew::start_app::<Model>();
}
```
