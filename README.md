# API-Computo Integrado
EQUIPO 2
## Summary

Little API for schedule a time for open pet food container.
This API is very basic express application
URL: ``157.230.215.178:3030/api``

## Endpoints
```
POST /set_time
Body:
{
  "horas":int,
  "minutos":int
}
Response:
{}
```
```
GET /time_match
Body: NO-BODY
Response:Boolean
```
```
GET /get_status
Body: NO-BODY
Response:
{
  "porcentaje":int,
  "full":boolean
}
```
