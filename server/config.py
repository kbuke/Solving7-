from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from sqlalchemy import MetaData
from flask_mail import Mail
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

# -----------------------
# DATABASE (FIXED)
# -----------------------
DATABASE_URL = os.getenv("DATABASE_URL")

if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://")

app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# -----------------------
# SECURITY
# -----------------------
app.config['SECRET_KEY'] = os.getenv("APP_SECRET_KEY")

# -----------------------
# MAIL
# -----------------------
app.config["MAIL_USERNAME"] = os.getenv("EMAIL_ADDRESS")
app.config["MAIL_PASSWORD"] = os.getenv("GMAIL_APP_PW")
app.config["FRONTEND_URL"] = os.getenv("FRONTEND_URL")
app.config["MAIL_DEFAULT_SENDER"] = os.getenv("EMAIL_ADDRESS")
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False

mail = Mail(app)

# -----------------------
# PAYSTACK
# -----------------------
PAYSTACK_TEST_SECRET_KEY = os.getenv("PAYSTACK_TEST_SECRET_KEY")
PAYSTACK_URL = "https://api.paystack.co/transaction/initialize"
PAYSTACK_LIVE_SECRET_KEY = os.getenv("PAYSTACK_LIVE_SECRET_KEY")

# -----------------------
# DB SETUP
# -----------------------
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s"
})

print("DATABASE_URL:", DATABASE_URL)
print("SECRET_KEY:", app.config["SECRET_KEY"])
print("FRONTEND_URL:", os.getenv("FRONTEND_URL"))

db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)

bcrypt = Bcrypt(app)
api = Api(app)

app.config.update(
    SESSION_COOKIE_SAMESITE="None",
    SESSION_COOKIE_SECURE=True
)

# -----------------------
# CORS (better production version)
# -----------------------
CORS(
    app,
    supports_credentials=True,
    origins=[os.getenv("FRONTEND_URL")]
)