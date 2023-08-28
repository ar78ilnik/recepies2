export const ticket = () => {
		let t = document.querySelector(".table");
		console.log(t);
		let j = [].reduce.call(t.rows, function(res, row) {
    	res[row.cells[0].textContent.slice()] = row.cells[1].textContent;
    	return res
	}, {});

document.getElementById("pre").textContent = JSON.stringify(j, null, 2);
}