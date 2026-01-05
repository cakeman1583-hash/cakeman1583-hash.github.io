
		(function () {
			var capsule = 'usb';
			function safeNumber(v) { return Number(v) || 0; }
			function getStored(name) { if (typeof lsGet === 'function') return lsGet(name); var v = localStorage.getItem(name); return v === null ? null : JSON.parse(v); }
			function refreshStats() {
				var pour = safeNumber(getStored('votePour' + capsule));
				var contre = safeNumber(getStored('voteContre' + capsule));
				var total = pour + contre;
				var pPour = total === 0 ? 0 : Math.round((pour / total) * 100);
				var pContre = 100 - pPour;
				var tbody = document.querySelector('#statsUsb tbody');
				if (!tbody) return;
				tbody.innerHTML = '';
				var tr1 = document.createElement('tr'); tr1.innerHTML = '<td>Pour</td><td>' + pour + '</td><td>' + pPour + ' %</td>';
				var tr2 = document.createElement('tr'); tr2.innerHTML = '<td>Contre</td><td>' + contre + '</td><td>' + pContre + ' %</td>';
				var tr3 = document.createElement('tr'); tr3.innerHTML = '<td>Total</td><td colspan="2">' + total + '</td>';
				tbody.appendChild(tr1); tbody.appendChild(tr2); tbody.appendChild(tr3);
			}
			document.addEventListener('DOMContentLoaded', function () { refreshStats(); if (typeof updateUI === 'function') updateUI(capsule); });
			document.addEventListener('votesChanged', function (e) { if (e && e.detail && e.detail.capsule === capsule) { refreshStats(); if (typeof updateUI === 'function') updateUI(capsule); } });
			document.addEventListener('click', function (ev) { var id = ev.target && ev.target.id; if (id === 'voteOK' + capsule || id === 'voteNot' + capsule) setTimeout(refreshStats, 50); });
		})();

