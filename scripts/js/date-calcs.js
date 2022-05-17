window.onload = function() {
	document.getElementById('experience').innerHTML = timeSince(new Date('02/02/2021'))
}

function timeSince(date) {
	const seconds = Math.floor((new Date() - date) / 1000);
	let interval = seconds / 31536000;

	const years = Math.floor(interval);
	interval = (seconds / 2592000) - (years*12);
	const months = Math.floor(interval);
	interval = (seconds / 86400) - (years*365 + months*30); //Assuming 1 month is 30 days for simplicity
	const days = Math.floor(interval);

	if(days === 0 && months === 0) {
		return `${years} year${years > 1 ? 's' : ''} of professional experience exactly, as of today.`;
	}

	if(days === 0 && months !== 0) {
		return `${years} year${years > 1 ? 's' : ''}, and exactly
				${months} month${months > 1 ? 's' : ''} of professional experience.`;
	}

	if(days !== 0 && months === 0) {
		return `${years} year${years > 1 ? 's' : ''}
				and ${days} day${days > 1 ? 's' : ''} of professional experience and counting.`;
	}
	
	return `${years} year${years > 1 ? 's' : ''}, 
			${months} month${months > 1 ? 's' : ''}, 
			and ${days} day${days > 1 ? 's' : ''} of professional experience and counting.`;
  }