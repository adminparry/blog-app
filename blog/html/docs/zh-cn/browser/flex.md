# sticky footers

> example

``` html
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <!-- this is an example from the MDN Layout Cookbook -->
    <title>CSS Cookbook: sticky footer</title>

    <link rel="stylesheet" href="styles.css">

    <style>
        html {
            height: 100%;
            box-sizing: border-box;
        }

        body {
            height: 100%;
            background-color: #fff;
            color: #333;
            font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
            padding: 0;
            margin: 0;
        }

        * {
            box-sizing: inherit;
        }

        section {
            height: 100%
        }

        .wrapper {
            min-height: 100%;
            display: grid;
            grid-template-rows: auto 1fr auto;
        }

        .page-header,
        .page-footer {
            background-color: rgb(75, 70, 74);
            color: #fff;
            padding: 20px;
        }

        .page-body {
            padding: 20px;
        }
    </style>



</head>

<body>
    <section>
        <div class="wrapper">
            <header class="page-header">This is the header</header>
            <main class="page-body">
                <p>Main page content here, add more if you want to see the footer push down.</p>
                <p>Main page content here, add more if you want to see the footer push down.</p>
                <p>Main page content here, add more if you want to see the footer push down.</p>
                <p>Main page content here, add more if you want to see the footer push down.</p>
                <p>Main page content here, add more if you want to see the footer push down.</p>
                <p>Main page content here, add more if you want to see the footer push down.</p>
                <p>Main page content here, add more if you want to see the footer push down.</p>
                <p>Main page content here, add more if you want to see the footer push down.</p>
                <p>Main page content here, add more if you want to see the footer push down.</p>
                <p>Main page content here, add more if you want to see the footer push down.</p>
                <p>Main page content here, add more if you want to see the footer push down.</p>

            </main>
            <footer class="page-footer">Sticky footer</footer>
        </div>
    </section>
</body>

</html>
```
