import { series } from "./Data.js";
import { Serie } from "./Serie.js";

const tbody = document.querySelector<HTMLTableSectionElement>("#series-body")!;
tbody.innerHTML = series.map(s => `
  <tr>
    <td><img src="${s.imageUrl}" alt="${s.name}" width="70" height="100" style="object-fit:cover;border-radius:6px;"></td>
    <td>${s.name}</td>
    <td>${s.network}</td>
    <td>${s.seasons}</td>
    <td>${s.synopsis}</td>
    <td><a class="btn btn-sm btn-warning" href="${s.url}" target="_blank" rel="noopener">Ver más</a></td>
  </tr>
`).join("");

const promedioSeasons = Serie.promedioSeasons(series);
const avgEl = document.querySelector<HTMLSpanElement>("#average-seasons");
if (avgEl) {
    avgEl.textContent = promedioSeasons.toFixed(2);
}