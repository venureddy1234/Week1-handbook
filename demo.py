from flask import Flask, request, jsonify

app = Flask(__name__)

def future_value(p, rates):
    fv = p
    for rate in rates:
        fv *= (1 + rate)
    return fv

@app.route('/')
def home():
    return "Welcome to the Future Value Calculator API!"

@app.route('/calculate', methods=['GET'])
def calculate():
    try:
        p = float(request.args.get('p', 1000))
        r = request.args.get('r', '0.05,0.04,0.06')
        rates = [float(x) for x in r.split(',')]
        fv = future_value(p, rates)
        return jsonify({
            'principal': p,
            'rates': rates,
            'future_value': round(fv, 2)
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=port)