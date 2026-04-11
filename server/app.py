from config import app
from helpers.AddResource import add_resource

from resources.Members import Members, SpecificMember
from resources.Teams import Teams, SpecificTeam
from resources.Pillars import Pillar, SpecificPillar
from resources.Products import Products, SpecificProduct
from resources.SustainableGoals import SustainableGoals, SpecificSustainableGoal
from resources.SustainablePillar import SustainablePillar, SpecificSustainablePillar
from resources.ProductPillars import ProductPillar, SpecificProductPillar
from resources.AdminDashboard import AdminDashboard
from resources.CheckAdmin import CheckAdmin
from resources.Login import Login
from resources.Logout import Logout
from resources.Emails import EmailList
from resources.News import NewsList, SpecificNews
from resources.ProductImages import ProductImage, SpecificProductImg
from resources.Partners import Partners, SpecificPartner
from resources.Donations import Donations, PaystackWebhook, VerifyTransaction

from flask import send_from_directory
import os

add_resource(Members, "/api/members")
add_resource(SpecificMember, "/api/members/<int:id>")

add_resource(Teams, "/api/teams")
add_resource(SpecificTeam, "/api/teams/<int:id>")

add_resource(Pillar, "/api/pillars")
add_resource(SpecificPillar, "/api/pillars/<int:id>")

add_resource(Products, "/api/products")
add_resource(SpecificProduct, "/api/products/<int:id>")

add_resource(SustainableGoals, "/api/sustainability")
add_resource(SpecificSustainableGoal, "/api/sustainability/<int:id>")

add_resource(SustainablePillar, "/api/sustainablepillar")
add_resource(SpecificSustainablePillar, "/api/sustainablepillar/<int:id>")

add_resource(ProductPillar, "/api/productpillar")
add_resource(SpecificProductPillar, "/api/productpillar/<int:id>")

add_resource(Login, "/api/login")
add_resource(Logout, "/api/logout")

add_resource(AdminDashboard, "/api/admin")
add_resource(CheckAdmin, "/api/check-admin")

add_resource(EmailList, "/api/emails")

add_resource(NewsList, "/api/news")
add_resource(SpecificNews, "/api/news/<int:id>")

add_resource(ProductImage, "/api/productimage")
add_resource(SpecificProductImg, "/api/productimage/<int:id>")

add_resource(Partners, "/api/partners")
add_resource(SpecificPartner, "/api/partners/<int:id>")

add_resource(Donations, "/donations")
add_resource(PaystackWebhook, "/paystack/webhook")
add_resource(VerifyTransaction, "/verify/<string:reference>")

# @app.route("/")
# def home():
#     return send_from_directory("../client/dist", "index.html")

# @app.route("/<path:path>")
# def static_files(path):
#     return send_from_directory("../client/dist", path)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
REACT_BUILD_DIR = os.path.join(BASE_DIR, "..", "client", "dist")


@app.route("/")
def home():
    return send_from_directory(REACT_BUILD_DIR, "index.html")


@app.route("/<path:path>")
def catch_all(path):
    file_path = os.path.join(REACT_BUILD_DIR, path)

    # If real file exists (js, css, images), serve it
    if os.path.exists(file_path):
        return send_from_directory(REACT_BUILD_DIR, path)

    # Otherwise ALWAYS return React app
    return send_from_directory(REACT_BUILD_DIR, "index.html")


if __name__ == "__main__":
    app.run(port = 5555, debug = True)