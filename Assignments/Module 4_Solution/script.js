var names=new Array();
names[0]="Ragnar";
names[1]="Lagertha";
names[2]="Bjorn";
names[3]="Ivar";
names[4]="Ubbe";
names[5]="Hvitserk";
names[6]="Sigurd";
names[7]="Jarl Borg";
names[8]="Jorunn";
names[9]="Judith";
names[10]="Jorvik";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
		 console.log("Good bye "+names[i])
    }
  else{
       	console.log("Hello "+ names[i])
    }
}