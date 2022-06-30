from app import app

CONFIG = dict(
    host="0.0.0.0",
    port=5000,
    debug=True
)

app.run(**CONFIG)
