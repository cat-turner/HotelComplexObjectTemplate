var hotel = {
    rooms: [
        {
            name: "Double Bed",
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxery Suite",
            price: "$250.00",
            available: 5
        }
    ],
    name: "CareerDevs Innt"
}

function createRadioButtons(){
    var content;
    var divItems = document.getElementById("radialSection");
    for (var i = 0; i < hotel.rooms.length; i++ ){
        var room = hotel.rooms[i];
        var name = room.name;
        var radioBtn = document.createElement("INPUT");
        // use the id as value so you can use
        // programmatically
        radioBtn.setAttribute("value", i);
        radioBtn.setAttribute("id", `radio-${i}`);
        radioBtn.setAttribute("type", "radio");
        // use name so that you can only select one radio at a time
        radioBtn.setAttribute("name","room");
        var radioLbl = document.createElement("LABEL");
        //radioLbl.setAttribute("id", `label-${i}`);
        radioLbl.innerHTML = name;
        
        //this doesnt work bc radio btns dont have inner html
        //radioBtn.appendChild(radioLbl);
        
        
        divItems.appendChild(radioBtn);
        divItems.appendChild(radioLbl)
        
        
    }
    
}

createRadioButtons()

