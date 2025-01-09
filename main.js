const list1 = [];
const list2=[];
const list3=[];
const list4=[];

//N y X controlan el numero de filas que se van a crear
let n = 1;
let x = 0;

function AddRow(){
            var AddRown = document.getElementById('show');
			let NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("first_name").value;
			list2[x] = document.getElementById("last_name").value;
			list3[x] = document.getElementById("email").value;
			list4[x] = document.getElementById("age").value;

			let cel1 = NewRow.insertCell(0);
			let cel2 = NewRow.insertCell(1);
			let cel3 = NewRow.insertCell(2);
			let cel4 = NewRow.insertCell(3);

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];

			n++;
			x++;
}