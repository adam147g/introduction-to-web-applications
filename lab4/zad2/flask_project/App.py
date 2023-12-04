from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from flask_marshmallow import Marshmallow
from marshmallow import post_load

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///demo.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Person(db.Model):
    id: Mapped[int] = mapped_column(db.Integer, primary_key=True)
    name: Mapped[str] = mapped_column(db.String)
    surname: Mapped[str] = mapped_column(db.String)
    job: Mapped[str] = mapped_column(db.String)

ma = Marshmallow(app)
class PersonSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
       model = Person

    # Deserializacja z JSON do obiektu Person
    @post_load  # Corrected decorator
    def make_person(self, data, **kwargs):
        return Person(**data)

# Endpoint do pobierania wszystkich osób (GET)
@app.route('/persons', methods=['GET'])
def get_persons():
    persons = Person.query.all()
    result = PersonSchema(many=True).dump(persons)
    return jsonify({'persons': result})

# Endpoint do pobierania jednej osoby na podstawie ID (GET)
@app.route('/persons/<int:person_id>', methods=['GET'])
def get_person(person_id):
    person = Person.query.get_or_404(person_id)
    result = PersonSchema().dump(person)
    return jsonify(result)

# Endpoint do dodawania nowej osoby (POST) - Updated to use JSON data
@app.route('/persons', methods=['POST'])
def add_person():
    name = request.args.get('name')
    surname = request.args.get('surname')
    job = request.args.get('job')

    if not name or not surname or not job:
        return jsonify({'message': 'Incomplete data. Please provide name, surname, and job.'}), 400

    new_person = Person(name=name, surname=surname, job=job)
    db.session.add(new_person)
    db.session.commit()
    result = PersonSchema().dump(new_person)
    return jsonify(result), 201

if __name__ == '__main__':
    with app.app_context():
        db.drop_all()
        db.create_all()
        db.session.add(Person(name="ser", surname="serowy", job='it'))
        db.session.commit()

    app.run(debug=True)
