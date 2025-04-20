# angular

> install

```  bash
npm i -g @angular/cli
```

> material

https://material.angular.io/guide/getting-started

``` bash
ng add @angular/material
```

> i18n

``` bash
ng add @angular/localize
```
>  pwa
``` bash
ng add @angular/pwa
```

> component lifecycle
``` ts
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit, Inject, Component, Injectable } from '@angular/core';
@Injectable()
export abstract class Lifecycle implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    ngOnChanges() {
        console.log('01ngOnChages执行了---当被绑定的输入属性的值发生变化时调用(父子组件传值的时候会触发)');
    }

    ngOnInit() {
        console.log('02ngOnInit执行了--- 请求数据一般放在这个里面');
    }
    ngDoCheck() {
        console.log('03ngDoCheck执行了---检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应');
    }
    ngAfterContentInit() {
        console.log('04ngAfterContentInit执行了---当把内容投影进组件之后调用');
    }
    ngAfterContentChecked() {
        console.log('05ngAfterContentChecked执行了---每次完成被投影组件内容的变更检测之后调用');
    }
    ngAfterViewInit(): void {
        console.log('06 ngAfterViewInit执行了----初始化完组件视图及其子视图之后调用（dom操作放在这个里面）');
    }
    ngAfterViewChecked() {
        console.log('07ngAfterViewChecked执行了----每次做完组件视图和子视图的变更检测之后调用');
    }

    ngOnDestroy() {
        console.log('08ngOnDestroy执行了····');
    }
}

```
> http
``` ts
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpClientModule,
  ],
})
```
``` ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './xyz/xyz.component.html',
  styleUrls: ['./xyz/xyz.component.scss']
})
export class AppComponent {
  public readonly title = 'angular-app';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUserInfo().subscribe(console.log)
  }
  getUserInfo() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}

```
>  interceptor
``` bash
ng g  interceptor auth
```
``` ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const req =  request.clone({
      setHeaders:{
        Authorization: 'Bearer xxxxx'
      }
    })
    return next.handle(req).pipe(retry(2), catchError(((err: HttpErrorResponse) => throwError(err))));
  }
}


providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
```
> 双向数据绑定

``` html

```

> ng generate

``` bash
ng  generate --help

```
> 事件绑定

```  html
<div (click)="textClick">Text</div>
<input (keyup.enter)="inputKeyup" />
```
>
>
> dom属性

``` html
<div [attr.data]="title"></div>
<img [src]="http://www.google.com" />
```
> 共享模块

``` bash
ng g  m shared
ng g c shared/component/Layout
```

> 路由
``` htlm
<a routerLink="/foo" >foo</a>
<router-outlet></router-outlet>
```

> proxy

``` bash
touch proxy.config.json

ng  serve --proxy-config proxy.config.json

{
    "/api/*": {
        "target": "http://localhost:4201",
        "secure":  false,
        "changeOrigin": true
    }

```
> ngrx
``` bash
npm i @ngrx/store @ngrx/effects @ngrx/entity @ngrx/router-store @ngrx/store-devtools @ngrx/schematics
ng config  cli.defaultCollection @ngrx/schematics

#store

ng g  store State --root --module app.module.ts --statePath store --stateInterface AppState

#action

ng g action store/actions/counter  --skipTests

#reducer

ng  g  reducer  store/reducers/counter --skipTest --reducers=../index.ts

```
> 数据服务 

```  bash
ng g service  cart
```

``` ts
export class CartService {
  items: Product[] = [];
/* . . . */

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
/* . . . */
}
```
> 组件交互

> 管道 

​DatePipe​：根据本地环境中的规则格式化日期值。

​UpperCasePipe​：把文本全部转换成大写。

​LowerCasePipe ​：把文本全部转换成小写。

​CurrencyPipe ​：把数字转换成货币字符串，根据本地环境中的规则进行格式化。

​DecimalPipe​：把数字转换成带小数点的字符串，根据本地环境中的规则进行格式化。

​PercentPipe ​：把数字转换成百分比字符串，根据本地环境中的规则进行格式化。

``` bash
ng g pipe 
```

``` ts
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
```
> bash

``` bash
# struct

> bash

``` bash
ng new angular-project

cd src 
ng g environments

ng g m services 
ng g s services/user

ng g m utils
ng g m directives
ng g m pipes
ng g m interceptors

ng g m pages
ng g c pages/Home

ng g m components
ng g c components/Layout

```
> directive

``` ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';



@NgModule({
  declarations: [HighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective
  ]
})
export class DirectiveModule { }

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor = '';

  @Input() appHighlight = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

```
