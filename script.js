let counter = document.querySelector("#counter");
let title = document.querySelector("#title");
let check = 0;

function callBackHell(){
	title.innerText = "Count down begins";
	setTimeout(()=>{
		counter.innerText = 10;
		setTimeout(()=>{
			counter.innerText = 9;
			setTimeout(()=>{
				counter.innerText = 8;
				setTimeout(()=>{
					counter.innerText = 7;
					setTimeout(()=>{
						counter.innerText = 6;
						setTimeout(()=>{
							counter.innerText = 5;
							setTimeout(()=>{
								counter.innerText = 4;
								setTimeout(()=>{
									counter.innerText = 3;
									setTimeout(()=>{
										counter.innerText = 2;
										setTimeout(()=>{
											counter.innerText = 1;
											setTimeout(()=>{
												counter.innerText = "Happy Independence Day";
												check = 1;
											},1000)
										},1000)
									},1000)
								},1000)
							},1000)
						},1000)
					},1000)
				},1000)
			},1000)
		},1000)
	},1000)
}

function reset(){
	if(check === 1){
		check = 0;
		title.innerText = "Click the \"Start\" button to begin the callback hell counter";
		counter.innerText = "-";
	}	
}