var books=[];
var id=0;

module.exports={
   read:(req,res)=>{
       res.status(200).send(books);
   },
   
   create:(req,res)=>{
       const{title,author}=req.body;
       let book = {
           id:id,
           title:title,
           author:author
       }
       books.push(book);
       id++;
       console.log(books)
       res.status(200).send(books);
   },
   update(req,res){
       let {id}=req.params
       let {title,author}=req.body
       for(let i=0; i<books.length; i++){
           if(books[i].id===Number(id)){
               books[i]={
                   id:books[i].id,
                   title:title||books[i].title,
                   author:author||books[i].author
               }
           }
       }
       res.status(200).send(books)
   },

   delete: ( req, res ) => {
    let index = null;
    books.forEach((book, i) => {
      if(book.id === Number(req.params.id)) index = i;
    })
    books.splice(index, 1)
    res.status(200).send( books );
  }
};


