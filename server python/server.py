import requests

# URL dell'API
api_url = "https://www.colourlovers.com/api/color/591BA6?format=json"

# Parametri della richiesta
#params = {"key": "valore"}

# Effettua la richiesta
response = requests.get(api_url)

# Controlla il risultato
if response.status_code == 200:
    print("Risposta JSON:", response.json())
else:
    print("Errore nella richiesta:", response.status_code)
