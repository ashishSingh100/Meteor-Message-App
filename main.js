Meme = new Mongo.Collection("members");

if (Meteor.isClient) {
    
      
   
    Template.entrys.events({
    'submit .js-form':function(event){
      var name, age;
      name = event.target.Name.value;
      age= event.target.Age.value;

        
        if(Meteor.user()){
      Meme.insert({
        name:name, 
        age:age, 
          user:Meteor.user().profile.name,
           
        registeredOn:new Date()
      });
        }
        else{
            alert('Register Please');
        }
       
        
        $(".f").val('');
      return false;
    }
        
        
        
        
        
  });
    
    
    Template.info.events({
        
         'click .js-del-image':function(event){
      //var image_id = $(this).data('id'); 
             
             var username=this.user;
             
             if(username==Meteor.user().profile.name){
             
       var image_id = this._id;
       console.log(image_id);
       // use jquery to hide the image component
       // then remove it at the end of the animation
       $("#"+image_id).hide('slow', function(){
        Meme.remove({"_id":image_id});
       })  
    }
       else{
           
           alert('Not authoriesed');
       }  
         },
        'keyup .search':function(event){
            if(event.keyCode == 13){
            
                Session.set('search/keyword', event.target.value);
                  $(".search").val('');
        }
            else{
                
                
            }
        }
        
        
    });
    
    Template.info.helpers({
  members: function () {
    var regexp = new RegExp(Session.get('search/keyword'), 'i');
    return Meme.find({name: regexp},{});
  }
});

    
    
    
    
    /*
    Template.info.helpers({members:function(){
        
        if(Session.set('search',searchr)){
        return Meme.find({name:searchr}, {});
    }
    else{
        
        return Meme.find({}, {});
    }
    }
    
    });
   
  */
    
    

}
    


