import { series } from "./Data.js";
import { Serie } from "./Serie.js";

const tbody = document.querySelector<HTMLTableSectionElement>("#series-body")!;
tbody.innerHTML = series.map(s => `
  <tr data-id="${s.id}">
    <td>
      <a href="#" class="serie-link text-info text-decoration-underline" data-id="${s.id}">
        ${s.name}
      </a>
    </td>
    <td>${s.network}</td>
    <td>${s.seasons}</td>
  </tr>
`).join("");

const promedio = Serie.promedioSeasons(series);
const avgEl = document.querySelector<HTMLSpanElement>("#average-seasons");
if (avgEl) avgEl.textContent = promedio.toFixed(2);

const detail = document.querySelector<HTMLDivElement>("#series-detail")!;
tbody.addEventListener("click", (ev) => {
  const link = (ev.target as HTMLElement).closest<HTMLAnchorElement>("a.serie-link");
  if (!link) return;
  ev.preventDefault();
  const id = Number(link.dataset.id);
  const s = series.find(x => x.id === id);
  if (s) {
    detail.innerHTML = s.toCardHTML();
  }
});


if (series.length) detail.innerHTML = series[0].toCardHTML();
