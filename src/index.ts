import app from './app'

app.listen(5000, () => {
  console.log(`
  #################################################
         Server listening on port: 5000   
  #################################################
`);
})
.on("error", (err) => {
  console.error('err',err);
});