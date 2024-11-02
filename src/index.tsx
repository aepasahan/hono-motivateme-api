import { Hono } from 'hono'
import { html, raw } from 'hono/html'

const app = new Hono()

app.get('/', (c) => {
    return c.html(
      <html>
        <head>
          <title>Test Site</title>
          {html`
            <script>
              // No need to use dangerouslySetInnerHTML.
              // If you write it here, it will not be escaped.
            </script>
          `}
        </head>
        <body>Hello!</body>
      </html>
    )
  })