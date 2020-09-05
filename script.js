let _map = {}
let _ctr = 1
add = () => {
	let _val = document.getElementById('input').value
	let _html = `
		<div class="item" onclick="remove(${_ctr})">
			<span>${_val}</span>
			<i class="fa fa-close"></i>
			<div class="clearfix"></div>
		</div>`
	_map[_ctr++]=_html
	document.getElementById('input-data').innerHTML=Object.values(_map).join('')		
	document.getElementById('input').value = ''
}
remove = (_index) => {
	document.getElementById('input-data').innerHTML = ''
	delete _map[_index]
	let _html = ''
	for(_i in _map){
		_html += _map[_i]
	}
	document.getElementById('input-data').innerHTML=_html
}