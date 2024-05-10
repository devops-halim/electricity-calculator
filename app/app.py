# from flask import Flask, request, jsonify, render_template

# app = Flask(__name__, static_folder='static', template_folder='templates')

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/calculate', methods=['POST'])
# def calculate_energy():
#     data = request.get_json()
#     watt = float(data['watt'])
#     hours = float(data['hours'])
#     consumption = watt * hours / 1000  # kWh
#     return jsonify({'consumption': consumption})

# if __name__ == '__main__':
#     app.run(debug=True)

# In app.py
from flask import Flask, jsonify, request, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate_energy():
    data = request.get_json()
    watt = float(data['watt'])
    hours = float(data['hours'])
    cost_per_kwh = float(data['costPerKWh']) / 100  # Umrechnen von Cent in Euro
    consumption = watt * hours / 1000  # kWh
    total_cost = consumption * cost_per_kwh  # Gesamtkosten in Euro
    return jsonify({'consumption': consumption, 'totalCost': format(total_cost, '.2f')})

if __name__ == '__main__':
    #app.run(debug=True)
    app.run(host='0.0.0.0', debug=True)
