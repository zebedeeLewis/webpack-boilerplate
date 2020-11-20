
module.exports =
  function
    ( context
    , options
    ) {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta
              http-equiv="X-UA-Compatible"
              content="IE=edge,chrome=1"
            >
            <meta name="description" content="">
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            >

            <title>${context.title}</title>
          </head>
          <body>
            ${options.fn(context)}
          </body>
        </html>
      `
    }
