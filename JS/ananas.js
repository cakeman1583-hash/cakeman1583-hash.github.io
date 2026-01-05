// Remplit et rafraîchit le tableau de statistiques pour l'ananas;
	(function () {
		function safeNumber(v) { return Number(v) || 0; }
		function getStored(name) {
			if (typeof lsGet === 'function') return lsGet(name);
			var v = localStorage.getItem(name);
			return v === null ? null : JSON.parse(v);
		}
		function refreshStats() {
			var pour = safeNumber(getStored('votePourananas'));
			var contre = safeNumber(getStored('voteContreananas'));
			var total = pour + contre;
			var pPour = total === 0 ? 0 : Math.round((pour / total) * 100);
			var pContre = 100 - pPour;
			var tbody = document.querySelector('#statsAnanas tbody');
			if (!tbody) return;
			tbody.innerHTML = '';
			var tr1 = document.createElement('tr');
			tr1.innerHTML = '<td>Pour</td><td>' + pour + '</td><td>' + pPour + ' %</td>';
			var tr2 = document.createElement('tr');
			tr2.innerHTML = '<td>Contre</td><td>' + contre + '</td><td>' + pContre + ' %</td>';
			var tr3 = document.createElement('tr');
			tr3.innerHTML = '<td>Total</td><td colspan="2">' + total + '</td>';
			tbody.appendChild(tr1);
			tbody.appendChild(tr2);
			tbody.appendChild(tr3);
		}

		document.addEventListener('DOMContentLoaded', function () {
			refreshStats();
			// s'assurer que la barre de vote locale est à jour (si updateUI est disponible)
			if (typeof updateUI === 'function') updateUI('ananas');
		});

		// Écouter les changements de votes provenant d'autres scripts/pages
		document.addEventListener('votesChanged', function (e) {
			if (!e || !e.detail) return;
			if (e.detail.capsule === 'ananas') {
				refreshStats();
				if (typeof updateUI === 'function') updateUI('ananas');
			}
		});

		// Si l'utilisateur vote sur cette page, updateUI/applyVote déclenchera aussi l'événement
		// mais on peut également rafraîchir après interaction au cas où.
		document.addEventListener('click', function (ev) {
			var id = ev.target && ev.target.id;
			if (id === 'voteOKananas' || id === 'voteNotananas') {
				// léger délai pour laisser main.js sauvegarder
				setTimeout(refreshStats, 50);
			}
		});
	})();

