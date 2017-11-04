
function recordsView(items){
	// if(!item) return '';
	items = items || ['No more records.'];
	const templ = `<ul>
										${items.map(item => `<li>${item}</li>`).join('')}
									</ul>`;

	return templ;
}

function pageViewGenerator(items){
	// if(!item) return '';
	items = items || ['No more records.'];
	const templ = `<ul>
										${items.map(item => `<li>${item}</li>`).join('')}
									</ul>`;

	return templ;
}