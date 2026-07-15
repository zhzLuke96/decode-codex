// Restored from ref/webview/assets/vennDiagram-DHZGUBPP-DQ5AHg0F.js
// Flat boundary. Vendored vennDiagramDHZGUBPP chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { invertA, invertI, invertO, invertR } from "./color-convert";
import rough from "roughjs";
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
import {
  chunkICPOFSXXF as _chunkICPOFSXXC,
  _chunkICPOFSXXC as _chunkICPOFSXXV,
  _chunkICPOFSXXL,
  _chunkICPOFSXXN,
  chunkICPOFSXXF,
  chunkICPOFSXXV as chunkICPOFSXXD,
  _chunkICPOFSXXK,
  _chunkICPOFSXXC as chunkICPOFSXXV,
  _chunkICPOFSXXD,
  chunkICPOFSXXW,
} from "./chunk-icpofsxx";
import { chunk426QAEUC } from "./chunk-426qaeuc";
import { chunk5PVQY5BWP } from "./chunk-5pvqy5bw";
var vennDiagramDHZGUBPPValue1 = (
  vennDiagramDHZGUBPPParam231,
  vennDiagramDHZGUBPPParam232,
) => invertA(vennDiagramDHZGUBPPParam231, "a", -vennDiagramDHZGUBPPParam232);
function vennDiagramDHZGUBPPHelper1(
  vennDiagramDHZGUBPPParam28,
  vennDiagramDHZGUBPPParam29,
) {
  let vennDiagramDHZGUBPPValue183 = vennDiagramDHZGUBPPHelper3(
      vennDiagramDHZGUBPPParam28,
    ),
    vennDiagramDHZGUBPPValue184 = vennDiagramDHZGUBPPValue183.filter((item) =>
      vennDiagramDHZGUBPPHelper2(item, vennDiagramDHZGUBPPParam28),
    ),
    vennDiagramDHZGUBPPValue185 = 0,
    vennDiagramDHZGUBPPValue186 = 0,
    vennDiagramDHZGUBPPValue187 = [];
  if (vennDiagramDHZGUBPPValue184.length > 1) {
    let vennDiagramDHZGUBPPValue234 = vennDiagramDHZGUBPPHelper8(
      vennDiagramDHZGUBPPValue184,
    );
    for (
      let vennDiagramDHZGUBPPValue485 = 0;
      vennDiagramDHZGUBPPValue485 < vennDiagramDHZGUBPPValue184.length;
      ++vennDiagramDHZGUBPPValue485
    ) {
      let vennDiagramDHZGUBPPValue537 =
        vennDiagramDHZGUBPPValue184[vennDiagramDHZGUBPPValue485];
      vennDiagramDHZGUBPPValue537.angle = Math.atan2(
        vennDiagramDHZGUBPPValue537.x - vennDiagramDHZGUBPPValue234.x,
        vennDiagramDHZGUBPPValue537.y - vennDiagramDHZGUBPPValue234.y,
      );
    }
    vennDiagramDHZGUBPPValue184.sort(
      (vennDiagramDHZGUBPPParam225, vennDiagramDHZGUBPPParam226) =>
        vennDiagramDHZGUBPPParam226.angle - vennDiagramDHZGUBPPParam225.angle,
    );
    let vennDiagramDHZGUBPPValue235 =
      vennDiagramDHZGUBPPValue184[vennDiagramDHZGUBPPValue184.length - 1];
    for (
      let vennDiagramDHZGUBPPValue265 = 0;
      vennDiagramDHZGUBPPValue265 < vennDiagramDHZGUBPPValue184.length;
      ++vennDiagramDHZGUBPPValue265
    ) {
      let vennDiagramDHZGUBPPValue272 =
        vennDiagramDHZGUBPPValue184[vennDiagramDHZGUBPPValue265];
      vennDiagramDHZGUBPPValue186 +=
        (vennDiagramDHZGUBPPValue235.x + vennDiagramDHZGUBPPValue272.x) *
        (vennDiagramDHZGUBPPValue272.y - vennDiagramDHZGUBPPValue235.y);
      let vennDiagramDHZGUBPPValue273 = {
          x:
            (vennDiagramDHZGUBPPValue272.x + vennDiagramDHZGUBPPValue235.x) / 2,
          y:
            (vennDiagramDHZGUBPPValue272.y + vennDiagramDHZGUBPPValue235.y) / 2,
        },
        vennDiagramDHZGUBPPValue274 = null;
      for (
        let vennDiagramDHZGUBPPValue307 = 0;
        vennDiagramDHZGUBPPValue307 <
        vennDiagramDHZGUBPPValue272.parentIndex.length;
        ++vennDiagramDHZGUBPPValue307
      )
        if (
          vennDiagramDHZGUBPPValue235.parentIndex.includes(
            vennDiagramDHZGUBPPValue272.parentIndex[
              vennDiagramDHZGUBPPValue307
            ],
          )
        ) {
          let vennDiagramDHZGUBPPValue325 =
              vennDiagramDHZGUBPPParam28[
                vennDiagramDHZGUBPPValue272.parentIndex[
                  vennDiagramDHZGUBPPValue307
                ]
              ],
            vennDiagramDHZGUBPPValue326 = Math.atan2(
              vennDiagramDHZGUBPPValue272.x - vennDiagramDHZGUBPPValue325.x,
              vennDiagramDHZGUBPPValue272.y - vennDiagramDHZGUBPPValue325.y,
            ),
            vennDiagramDHZGUBPPValue327 = Math.atan2(
              vennDiagramDHZGUBPPValue235.x - vennDiagramDHZGUBPPValue325.x,
              vennDiagramDHZGUBPPValue235.y - vennDiagramDHZGUBPPValue325.y,
            ),
            vennDiagramDHZGUBPPValue328 =
              vennDiagramDHZGUBPPValue327 - vennDiagramDHZGUBPPValue326;
          vennDiagramDHZGUBPPValue328 < 0 &&
            (vennDiagramDHZGUBPPValue328 += 2 * Math.PI);
          let vennDiagramDHZGUBPPValue329 =
              vennDiagramDHZGUBPPValue327 - vennDiagramDHZGUBPPValue328 / 2,
            vennDiagramDHZGUBPPValue330 = vennDiagramDHZGUBPPHelper5(
              vennDiagramDHZGUBPPValue273,
              {
                x:
                  vennDiagramDHZGUBPPValue325.x +
                  vennDiagramDHZGUBPPValue325.radius *
                    Math.sin(vennDiagramDHZGUBPPValue329),
                y:
                  vennDiagramDHZGUBPPValue325.y +
                  vennDiagramDHZGUBPPValue325.radius *
                    Math.cos(vennDiagramDHZGUBPPValue329),
              },
            );
          vennDiagramDHZGUBPPValue330 >
            vennDiagramDHZGUBPPValue325.radius * 2 &&
            (vennDiagramDHZGUBPPValue330 =
              vennDiagramDHZGUBPPValue325.radius * 2);
          (vennDiagramDHZGUBPPValue274 == null ||
            vennDiagramDHZGUBPPValue274.width > vennDiagramDHZGUBPPValue330) &&
            (vennDiagramDHZGUBPPValue274 = {
              circle: vennDiagramDHZGUBPPValue325,
              width: vennDiagramDHZGUBPPValue330,
              p1: vennDiagramDHZGUBPPValue272,
              p2: vennDiagramDHZGUBPPValue235,
              large:
                vennDiagramDHZGUBPPValue330 >
                vennDiagramDHZGUBPPValue325.radius,
              sweep: true,
            });
        }
      vennDiagramDHZGUBPPValue274 != null &&
        (vennDiagramDHZGUBPPValue187.push(vennDiagramDHZGUBPPValue274),
        (vennDiagramDHZGUBPPValue185 += vennDiagramDHZGUBPPHelper4(
          vennDiagramDHZGUBPPValue274.circle.radius,
          vennDiagramDHZGUBPPValue274.width,
        )),
        (vennDiagramDHZGUBPPValue235 = vennDiagramDHZGUBPPValue272));
    }
  } else {
    let vennDiagramDHZGUBPPValue322 = vennDiagramDHZGUBPPParam28[0];
    for (
      let vennDiagramDHZGUBPPValue519 = 1;
      vennDiagramDHZGUBPPValue519 < vennDiagramDHZGUBPPParam28.length;
      ++vennDiagramDHZGUBPPValue519
    )
      vennDiagramDHZGUBPPParam28[vennDiagramDHZGUBPPValue519].radius <
        vennDiagramDHZGUBPPValue322.radius &&
        (vennDiagramDHZGUBPPValue322 =
          vennDiagramDHZGUBPPParam28[vennDiagramDHZGUBPPValue519]);
    let vennDiagramDHZGUBPPValue323 = false;
    for (
      let vennDiagramDHZGUBPPValue480 = 0;
      vennDiagramDHZGUBPPValue480 < vennDiagramDHZGUBPPParam28.length;
      ++vennDiagramDHZGUBPPValue480
    )
      if (
        vennDiagramDHZGUBPPHelper5(
          vennDiagramDHZGUBPPParam28[vennDiagramDHZGUBPPValue480],
          vennDiagramDHZGUBPPValue322,
        ) >
        Math.abs(
          vennDiagramDHZGUBPPValue322.radius -
            vennDiagramDHZGUBPPParam28[vennDiagramDHZGUBPPValue480].radius,
        )
      ) {
        vennDiagramDHZGUBPPValue323 = true;
        break;
      }
    vennDiagramDHZGUBPPValue323
      ? (vennDiagramDHZGUBPPValue185 = vennDiagramDHZGUBPPValue186 = 0)
      : ((vennDiagramDHZGUBPPValue185 =
          vennDiagramDHZGUBPPValue322.radius *
          vennDiagramDHZGUBPPValue322.radius *
          Math.PI),
        vennDiagramDHZGUBPPValue187.push({
          circle: vennDiagramDHZGUBPPValue322,
          p1: {
            x: vennDiagramDHZGUBPPValue322.x,
            y:
              vennDiagramDHZGUBPPValue322.y +
              vennDiagramDHZGUBPPValue322.radius,
          },
          p2: {
            x: vennDiagramDHZGUBPPValue322.x - 1e-10,
            y:
              vennDiagramDHZGUBPPValue322.y +
              vennDiagramDHZGUBPPValue322.radius,
          },
          width: vennDiagramDHZGUBPPValue322.radius * 2,
          large: true,
          sweep: true,
        }));
  }
  return (
    (vennDiagramDHZGUBPPValue186 /= 2),
    vennDiagramDHZGUBPPParam29 &&
      ((vennDiagramDHZGUBPPParam29.area =
        vennDiagramDHZGUBPPValue185 + vennDiagramDHZGUBPPValue186),
      (vennDiagramDHZGUBPPParam29.arcArea = vennDiagramDHZGUBPPValue185),
      (vennDiagramDHZGUBPPParam29.polygonArea = vennDiagramDHZGUBPPValue186),
      (vennDiagramDHZGUBPPParam29.arcs = vennDiagramDHZGUBPPValue187),
      (vennDiagramDHZGUBPPParam29.innerPoints = vennDiagramDHZGUBPPValue184),
      (vennDiagramDHZGUBPPParam29.intersectionPoints =
        vennDiagramDHZGUBPPValue183)),
    vennDiagramDHZGUBPPValue185 + vennDiagramDHZGUBPPValue186
  );
}
function vennDiagramDHZGUBPPHelper2(
  vennDiagramDHZGUBPPParam180,
  vennDiagramDHZGUBPPParam181,
) {
  return vennDiagramDHZGUBPPParam181.every(
    (item) =>
      vennDiagramDHZGUBPPHelper5(vennDiagramDHZGUBPPParam180, item) <
      item.radius + 1e-10,
  );
}
function vennDiagramDHZGUBPPHelper3(vennDiagramDHZGUBPPParam115) {
  let vennDiagramDHZGUBPPValue407 = [];
  for (
    let vennDiagramDHZGUBPPValue430 = 0;
    vennDiagramDHZGUBPPValue430 < vennDiagramDHZGUBPPParam115.length;
    ++vennDiagramDHZGUBPPValue430
  )
    for (
      let vennDiagramDHZGUBPPValue464 = vennDiagramDHZGUBPPValue430 + 1;
      vennDiagramDHZGUBPPValue464 < vennDiagramDHZGUBPPParam115.length;
      ++vennDiagramDHZGUBPPValue464
    ) {
      let vennDiagramDHZGUBPPValue505 = vennDiagramDHZGUBPPHelper7(
        vennDiagramDHZGUBPPParam115[vennDiagramDHZGUBPPValue430],
        vennDiagramDHZGUBPPParam115[vennDiagramDHZGUBPPValue464],
      );
      for (let vennDiagramDHZGUBPPValue543 of vennDiagramDHZGUBPPValue505) {
        vennDiagramDHZGUBPPValue543.parentIndex = [
          vennDiagramDHZGUBPPValue430,
          vennDiagramDHZGUBPPValue464,
        ];
        vennDiagramDHZGUBPPValue407.push(vennDiagramDHZGUBPPValue543);
      }
    }
  return vennDiagramDHZGUBPPValue407;
}
function vennDiagramDHZGUBPPHelper4(
  vennDiagramDHZGUBPPParam159,
  vennDiagramDHZGUBPPParam160,
) {
  return (
    vennDiagramDHZGUBPPParam159 *
      vennDiagramDHZGUBPPParam159 *
      Math.acos(1 - vennDiagramDHZGUBPPParam160 / vennDiagramDHZGUBPPParam159) -
    (vennDiagramDHZGUBPPParam159 - vennDiagramDHZGUBPPParam160) *
      Math.sqrt(
        vennDiagramDHZGUBPPParam160 *
          (2 * vennDiagramDHZGUBPPParam159 - vennDiagramDHZGUBPPParam160),
      )
  );
}
function vennDiagramDHZGUBPPHelper5(
  vennDiagramDHZGUBPPParam152,
  vennDiagramDHZGUBPPParam153,
) {
  return Math.sqrt(
    (vennDiagramDHZGUBPPParam152.x - vennDiagramDHZGUBPPParam153.x) *
      (vennDiagramDHZGUBPPParam152.x - vennDiagramDHZGUBPPParam153.x) +
      (vennDiagramDHZGUBPPParam152.y - vennDiagramDHZGUBPPParam153.y) *
        (vennDiagramDHZGUBPPParam152.y - vennDiagramDHZGUBPPParam153.y),
  );
}
function vennDiagramDHZGUBPPHelper6(
  vennDiagramDHZGUBPPParam111,
  vennDiagramDHZGUBPPParam112,
  vennDiagramDHZGUBPPParam113,
) {
  if (
    vennDiagramDHZGUBPPParam113 >=
    vennDiagramDHZGUBPPParam111 + vennDiagramDHZGUBPPParam112
  )
    return 0;
  if (
    vennDiagramDHZGUBPPParam113 <=
    Math.abs(vennDiagramDHZGUBPPParam111 - vennDiagramDHZGUBPPParam112)
  )
    return (
      Math.PI *
      Math.min(vennDiagramDHZGUBPPParam111, vennDiagramDHZGUBPPParam112) *
      Math.min(vennDiagramDHZGUBPPParam111, vennDiagramDHZGUBPPParam112)
    );
  let vennDiagramDHZGUBPPValue398 =
      vennDiagramDHZGUBPPParam111 -
      (vennDiagramDHZGUBPPParam113 * vennDiagramDHZGUBPPParam113 -
        vennDiagramDHZGUBPPParam112 * vennDiagramDHZGUBPPParam112 +
        vennDiagramDHZGUBPPParam111 * vennDiagramDHZGUBPPParam111) /
        (2 * vennDiagramDHZGUBPPParam113),
    vennDiagramDHZGUBPPValue399 =
      vennDiagramDHZGUBPPParam112 -
      (vennDiagramDHZGUBPPParam113 * vennDiagramDHZGUBPPParam113 -
        vennDiagramDHZGUBPPParam111 * vennDiagramDHZGUBPPParam111 +
        vennDiagramDHZGUBPPParam112 * vennDiagramDHZGUBPPParam112) /
        (2 * vennDiagramDHZGUBPPParam113);
  return (
    vennDiagramDHZGUBPPHelper4(
      vennDiagramDHZGUBPPParam111,
      vennDiagramDHZGUBPPValue398,
    ) +
    vennDiagramDHZGUBPPHelper4(
      vennDiagramDHZGUBPPParam112,
      vennDiagramDHZGUBPPValue399,
    )
  );
}
function vennDiagramDHZGUBPPHelper7(
  vennDiagramDHZGUBPPParam101,
  vennDiagramDHZGUBPPParam102,
) {
  let vennDiagramDHZGUBPPValue355 = vennDiagramDHZGUBPPHelper5(
      vennDiagramDHZGUBPPParam101,
      vennDiagramDHZGUBPPParam102,
    ),
    vennDiagramDHZGUBPPValue356 = vennDiagramDHZGUBPPParam101.radius,
    vennDiagramDHZGUBPPValue357 = vennDiagramDHZGUBPPParam102.radius;
  if (
    vennDiagramDHZGUBPPValue355 >=
      vennDiagramDHZGUBPPValue356 + vennDiagramDHZGUBPPValue357 ||
    vennDiagramDHZGUBPPValue355 <=
      Math.abs(vennDiagramDHZGUBPPValue356 - vennDiagramDHZGUBPPValue357)
  )
    return [];
  let vennDiagramDHZGUBPPValue358 =
      (vennDiagramDHZGUBPPValue356 * vennDiagramDHZGUBPPValue356 -
        vennDiagramDHZGUBPPValue357 * vennDiagramDHZGUBPPValue357 +
        vennDiagramDHZGUBPPValue355 * vennDiagramDHZGUBPPValue355) /
      (2 * vennDiagramDHZGUBPPValue355),
    vennDiagramDHZGUBPPValue359 = Math.sqrt(
      vennDiagramDHZGUBPPValue356 * vennDiagramDHZGUBPPValue356 -
        vennDiagramDHZGUBPPValue358 * vennDiagramDHZGUBPPValue358,
    ),
    vennDiagramDHZGUBPPValue360 =
      vennDiagramDHZGUBPPParam101.x +
      (vennDiagramDHZGUBPPValue358 *
        (vennDiagramDHZGUBPPParam102.x - vennDiagramDHZGUBPPParam101.x)) /
        vennDiagramDHZGUBPPValue355,
    vennDiagramDHZGUBPPValue361 =
      vennDiagramDHZGUBPPParam101.y +
      (vennDiagramDHZGUBPPValue358 *
        (vennDiagramDHZGUBPPParam102.y - vennDiagramDHZGUBPPParam101.y)) /
        vennDiagramDHZGUBPPValue355,
    vennDiagramDHZGUBPPValue362 =
      -(vennDiagramDHZGUBPPParam102.y - vennDiagramDHZGUBPPParam101.y) *
      (vennDiagramDHZGUBPPValue359 / vennDiagramDHZGUBPPValue355),
    vennDiagramDHZGUBPPValue363 =
      -(vennDiagramDHZGUBPPParam102.x - vennDiagramDHZGUBPPParam101.x) *
      (vennDiagramDHZGUBPPValue359 / vennDiagramDHZGUBPPValue355);
  return [
    {
      x: vennDiagramDHZGUBPPValue360 + vennDiagramDHZGUBPPValue362,
      y: vennDiagramDHZGUBPPValue361 - vennDiagramDHZGUBPPValue363,
    },
    {
      x: vennDiagramDHZGUBPPValue360 - vennDiagramDHZGUBPPValue362,
      y: vennDiagramDHZGUBPPValue361 + vennDiagramDHZGUBPPValue363,
    },
  ];
}
function vennDiagramDHZGUBPPHelper8(vennDiagramDHZGUBPPParam136) {
  let vennDiagramDHZGUBPPValue457 = {
    x: 0,
    y: 0,
  };
  for (let vennDiagramDHZGUBPPValue559 of vennDiagramDHZGUBPPParam136) {
    vennDiagramDHZGUBPPValue457.x += vennDiagramDHZGUBPPValue559.x;
    vennDiagramDHZGUBPPValue457.y += vennDiagramDHZGUBPPValue559.y;
  }
  return (
    (vennDiagramDHZGUBPPValue457.x /= vennDiagramDHZGUBPPParam136.length),
    (vennDiagramDHZGUBPPValue457.y /= vennDiagramDHZGUBPPParam136.length),
    vennDiagramDHZGUBPPValue457
  );
}
function vennDiagramDHZGUBPPHelper9(
  vennDiagramDHZGUBPPParam92,
  vennDiagramDHZGUBPPParam93,
  vennDiagramDHZGUBPPParam94,
  vennDiagramDHZGUBPPParam95,
) {
  vennDiagramDHZGUBPPParam95 ||= {};
  let vennDiagramDHZGUBPPValue337 =
      vennDiagramDHZGUBPPParam95.maxIterations || 100,
    vennDiagramDHZGUBPPValue338 = vennDiagramDHZGUBPPParam95.tolerance || 1e-10,
    vennDiagramDHZGUBPPValue339 = vennDiagramDHZGUBPPParam92(
      vennDiagramDHZGUBPPParam93,
    ),
    vennDiagramDHZGUBPPValue340 = vennDiagramDHZGUBPPParam92(
      vennDiagramDHZGUBPPParam94,
    ),
    vennDiagramDHZGUBPPValue341 =
      vennDiagramDHZGUBPPParam94 - vennDiagramDHZGUBPPParam93;
  if (vennDiagramDHZGUBPPValue339 * vennDiagramDHZGUBPPValue340 > 0)
    throw "Initial bisect points must have opposite signs";
  if (vennDiagramDHZGUBPPValue339 === 0) return vennDiagramDHZGUBPPParam93;
  if (vennDiagramDHZGUBPPValue340 === 0) return vennDiagramDHZGUBPPParam94;
  for (
    let vennDiagramDHZGUBPPValue470 = 0;
    vennDiagramDHZGUBPPValue470 < vennDiagramDHZGUBPPValue337;
    ++vennDiagramDHZGUBPPValue470
  ) {
    vennDiagramDHZGUBPPValue341 /= 2;
    let vennDiagramDHZGUBPPValue489 =
        vennDiagramDHZGUBPPParam93 + vennDiagramDHZGUBPPValue341,
      vennDiagramDHZGUBPPValue490 = vennDiagramDHZGUBPPParam92(
        vennDiagramDHZGUBPPValue489,
      );
    if (
      (vennDiagramDHZGUBPPValue490 * vennDiagramDHZGUBPPValue339 >= 0 &&
        (vennDiagramDHZGUBPPParam93 = vennDiagramDHZGUBPPValue489),
      Math.abs(vennDiagramDHZGUBPPValue341) < vennDiagramDHZGUBPPValue338 ||
        vennDiagramDHZGUBPPValue490 === 0)
    )
      return vennDiagramDHZGUBPPValue489;
  }
  return vennDiagramDHZGUBPPParam93 + vennDiagramDHZGUBPPValue341;
}
function vennDiagramDHZGUBPPHelper10(vennDiagramDHZGUBPPParam170) {
  let vennDiagramDHZGUBPPValue506 = Array(vennDiagramDHZGUBPPParam170);
  for (
    let vennDiagramDHZGUBPPValue565 = 0;
    vennDiagramDHZGUBPPValue565 < vennDiagramDHZGUBPPParam170;
    ++vennDiagramDHZGUBPPValue565
  )
    vennDiagramDHZGUBPPValue506[vennDiagramDHZGUBPPValue565] = 0;
  return vennDiagramDHZGUBPPValue506;
}
function vennDiagramDHZGUBPPHelper11(
  vennDiagramDHZGUBPPParam203,
  vennDiagramDHZGUBPPParam204,
) {
  return vennDiagramDHZGUBPPHelper10(vennDiagramDHZGUBPPParam203).map(() =>
    vennDiagramDHZGUBPPHelper10(vennDiagramDHZGUBPPParam204),
  );
}
function vennDiagramDHZGUBPPHelper12(
  vennDiagramDHZGUBPPParam154,
  vennDiagramDHZGUBPPParam155,
) {
  let vennDiagramDHZGUBPPValue487 = 0;
  for (
    let vennDiagramDHZGUBPPValue551 = 0;
    vennDiagramDHZGUBPPValue551 < vennDiagramDHZGUBPPParam154.length;
    ++vennDiagramDHZGUBPPValue551
  )
    vennDiagramDHZGUBPPValue487 +=
      vennDiagramDHZGUBPPParam154[vennDiagramDHZGUBPPValue551] *
      vennDiagramDHZGUBPPParam155[vennDiagramDHZGUBPPValue551];
  return vennDiagramDHZGUBPPValue487;
}
function vennDiagramDHZGUBPPHelper13(vennDiagramDHZGUBPPParam208) {
  return Math.sqrt(
    vennDiagramDHZGUBPPHelper12(
      vennDiagramDHZGUBPPParam208,
      vennDiagramDHZGUBPPParam208,
    ),
  );
}
function vennDiagramDHZGUBPPHelper14(
  vennDiagramDHZGUBPPParam177,
  vennDiagramDHZGUBPPParam178,
  vennDiagramDHZGUBPPParam179,
) {
  for (
    let vennDiagramDHZGUBPPValue553 = 0;
    vennDiagramDHZGUBPPValue553 < vennDiagramDHZGUBPPParam178.length;
    ++vennDiagramDHZGUBPPValue553
  )
    vennDiagramDHZGUBPPParam177[vennDiagramDHZGUBPPValue553] =
      vennDiagramDHZGUBPPParam178[vennDiagramDHZGUBPPValue553] *
      vennDiagramDHZGUBPPParam179;
}
function vennDiagramDHZGUBPPHelper15(
  vennDiagramDHZGUBPPParam163,
  vennDiagramDHZGUBPPParam164,
  vennDiagramDHZGUBPPParam165,
  vennDiagramDHZGUBPPParam166,
  vennDiagramDHZGUBPPParam167,
) {
  for (
    let vennDiagramDHZGUBPPValue540 = 0;
    vennDiagramDHZGUBPPValue540 < vennDiagramDHZGUBPPParam163.length;
    ++vennDiagramDHZGUBPPValue540
  )
    vennDiagramDHZGUBPPParam163[vennDiagramDHZGUBPPValue540] =
      vennDiagramDHZGUBPPParam164 *
        vennDiagramDHZGUBPPParam165[vennDiagramDHZGUBPPValue540] +
      vennDiagramDHZGUBPPParam166 *
        vennDiagramDHZGUBPPParam167[vennDiagramDHZGUBPPValue540];
}
function vennDiagramDHZGUBPPHelper16(
  vennDiagramDHZGUBPPParam23,
  vennDiagramDHZGUBPPParam24,
  vennDiagramDHZGUBPPParam25,
) {
  vennDiagramDHZGUBPPParam25 ||= {};
  let vennDiagramDHZGUBPPValue162 =
      vennDiagramDHZGUBPPParam25.maxIterations ||
      vennDiagramDHZGUBPPParam24.length * 200,
    vennDiagramDHZGUBPPValue163 =
      vennDiagramDHZGUBPPParam25.nonZeroDelta || 1.05,
    vennDiagramDHZGUBPPValue164 = vennDiagramDHZGUBPPParam25.zeroDelta || 0.001,
    vennDiagramDHZGUBPPValue165 =
      vennDiagramDHZGUBPPParam25.minErrorDelta || 1e-6,
    vennDiagramDHZGUBPPValue166 =
      vennDiagramDHZGUBPPParam25.minErrorDelta || 1e-5,
    vennDiagramDHZGUBPPValue167 =
      vennDiagramDHZGUBPPParam25.rho === undefined
        ? 1
        : vennDiagramDHZGUBPPParam25.rho,
    vennDiagramDHZGUBPPValue168 =
      vennDiagramDHZGUBPPParam25.chi === undefined
        ? 2
        : vennDiagramDHZGUBPPParam25.chi,
    vennDiagramDHZGUBPPValue169 =
      vennDiagramDHZGUBPPParam25.psi === undefined
        ? -0.5
        : vennDiagramDHZGUBPPParam25.psi,
    vennDiagramDHZGUBPPValue170 =
      vennDiagramDHZGUBPPParam25.sigma === undefined
        ? 0.5
        : vennDiagramDHZGUBPPParam25.sigma,
    vennDiagramDHZGUBPPValue171,
    vennDiagramDHZGUBPPValue172 = vennDiagramDHZGUBPPParam24.length,
    vennDiagramDHZGUBPPValue173 = Array(vennDiagramDHZGUBPPValue172 + 1);
  vennDiagramDHZGUBPPValue173[0] = vennDiagramDHZGUBPPParam24;
  vennDiagramDHZGUBPPValue173[0].fx = vennDiagramDHZGUBPPParam23(
    vennDiagramDHZGUBPPParam24,
  );
  vennDiagramDHZGUBPPValue173[0].id = 0;
  for (
    let vennDiagramDHZGUBPPValue465 = 0;
    vennDiagramDHZGUBPPValue465 < vennDiagramDHZGUBPPValue172;
    ++vennDiagramDHZGUBPPValue465
  ) {
    let vennDiagramDHZGUBPPValue486 = vennDiagramDHZGUBPPParam24.slice();
    vennDiagramDHZGUBPPValue486[vennDiagramDHZGUBPPValue465] =
      vennDiagramDHZGUBPPValue486[vennDiagramDHZGUBPPValue465]
        ? vennDiagramDHZGUBPPValue486[vennDiagramDHZGUBPPValue465] *
          vennDiagramDHZGUBPPValue163
        : vennDiagramDHZGUBPPValue164;
    vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue465 + 1] =
      vennDiagramDHZGUBPPValue486;
    vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue465 + 1].fx =
      vennDiagramDHZGUBPPParam23(vennDiagramDHZGUBPPValue486);
    vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue465 + 1].id =
      vennDiagramDHZGUBPPValue465 + 1;
  }
  function vennDiagramDHZGUBPPHelper59(vennDiagramDHZGUBPPParam168) {
    for (
      let vennDiagramDHZGUBPPValue552 = 0;
      vennDiagramDHZGUBPPValue552 < vennDiagramDHZGUBPPParam168.length;
      vennDiagramDHZGUBPPValue552++
    )
      vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue172][
        vennDiagramDHZGUBPPValue552
      ] = vennDiagramDHZGUBPPParam168[vennDiagramDHZGUBPPValue552];
    vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue172].fx =
      vennDiagramDHZGUBPPParam168.fx;
  }
  let vennDiagramDHZGUBPPValue174 = (
      vennDiagramDHZGUBPPParam236,
      vennDiagramDHZGUBPPParam237,
    ) => vennDiagramDHZGUBPPParam236.fx - vennDiagramDHZGUBPPParam237.fx,
    vennDiagramDHZGUBPPValue175 = vennDiagramDHZGUBPPParam24.slice(),
    vennDiagramDHZGUBPPValue176 = vennDiagramDHZGUBPPParam24.slice(),
    vennDiagramDHZGUBPPValue177 = vennDiagramDHZGUBPPParam24.slice(),
    vennDiagramDHZGUBPPValue178 = vennDiagramDHZGUBPPParam24.slice();
  for (
    let vennDiagramDHZGUBPPValue232 = 0;
    vennDiagramDHZGUBPPValue232 < vennDiagramDHZGUBPPValue162;
    ++vennDiagramDHZGUBPPValue232
  ) {
    if (
      (vennDiagramDHZGUBPPValue173.sort(vennDiagramDHZGUBPPValue174),
      vennDiagramDHZGUBPPParam25.history)
    ) {
      let vennDiagramDHZGUBPPValue411 = vennDiagramDHZGUBPPValue173.map(
        (item) => {
          let vennDiagramDHZGUBPPValue533 = item.slice();
          return (
            (vennDiagramDHZGUBPPValue533.fx = item.fx),
            (vennDiagramDHZGUBPPValue533.id = item.id),
            vennDiagramDHZGUBPPValue533
          );
        },
      );
      vennDiagramDHZGUBPPValue411.sort(
        (vennDiagramDHZGUBPPParam238, vennDiagramDHZGUBPPParam239) =>
          vennDiagramDHZGUBPPParam238.id - vennDiagramDHZGUBPPParam239.id,
      );
      vennDiagramDHZGUBPPParam25.history.push({
        x: vennDiagramDHZGUBPPValue173[0].slice(),
        fx: vennDiagramDHZGUBPPValue173[0].fx,
        simplex: vennDiagramDHZGUBPPValue411,
      });
    }
    vennDiagramDHZGUBPPValue171 = 0;
    for (
      let vennDiagramDHZGUBPPValue517 = 0;
      vennDiagramDHZGUBPPValue517 < vennDiagramDHZGUBPPValue172;
      ++vennDiagramDHZGUBPPValue517
    )
      vennDiagramDHZGUBPPValue171 = Math.max(
        vennDiagramDHZGUBPPValue171,
        Math.abs(
          vennDiagramDHZGUBPPValue173[0][vennDiagramDHZGUBPPValue517] -
            vennDiagramDHZGUBPPValue173[1][vennDiagramDHZGUBPPValue517],
        ),
      );
    if (
      Math.abs(
        vennDiagramDHZGUBPPValue173[0].fx -
          vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue172].fx,
      ) < vennDiagramDHZGUBPPValue165 &&
      vennDiagramDHZGUBPPValue171 < vennDiagramDHZGUBPPValue166
    )
      break;
    for (
      let vennDiagramDHZGUBPPValue491 = 0;
      vennDiagramDHZGUBPPValue491 < vennDiagramDHZGUBPPValue172;
      ++vennDiagramDHZGUBPPValue491
    ) {
      vennDiagramDHZGUBPPValue175[vennDiagramDHZGUBPPValue491] = 0;
      for (
        let vennDiagramDHZGUBPPValue557 = 0;
        vennDiagramDHZGUBPPValue557 < vennDiagramDHZGUBPPValue172;
        ++vennDiagramDHZGUBPPValue557
      )
        vennDiagramDHZGUBPPValue175[vennDiagramDHZGUBPPValue491] +=
          vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue557][
            vennDiagramDHZGUBPPValue491
          ];
      vennDiagramDHZGUBPPValue175[vennDiagramDHZGUBPPValue491] /=
        vennDiagramDHZGUBPPValue172;
    }
    let vennDiagramDHZGUBPPValue233 =
      vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue172];
    if (
      (vennDiagramDHZGUBPPHelper15(
        vennDiagramDHZGUBPPValue176,
        1 + vennDiagramDHZGUBPPValue167,
        vennDiagramDHZGUBPPValue175,
        -vennDiagramDHZGUBPPValue167,
        vennDiagramDHZGUBPPValue233,
      ),
      (vennDiagramDHZGUBPPValue176.fx = vennDiagramDHZGUBPPParam23(
        vennDiagramDHZGUBPPValue176,
      )),
      vennDiagramDHZGUBPPValue176.fx < vennDiagramDHZGUBPPValue173[0].fx)
    ) {
      vennDiagramDHZGUBPPHelper15(
        vennDiagramDHZGUBPPValue178,
        1 + vennDiagramDHZGUBPPValue168,
        vennDiagramDHZGUBPPValue175,
        -vennDiagramDHZGUBPPValue168,
        vennDiagramDHZGUBPPValue233,
      );
      vennDiagramDHZGUBPPValue178.fx = vennDiagramDHZGUBPPParam23(
        vennDiagramDHZGUBPPValue178,
      );
      vennDiagramDHZGUBPPValue178.fx < vennDiagramDHZGUBPPValue176.fx
        ? vennDiagramDHZGUBPPHelper59(vennDiagramDHZGUBPPValue178)
        : vennDiagramDHZGUBPPHelper59(vennDiagramDHZGUBPPValue176);
    } else if (
      vennDiagramDHZGUBPPValue176.fx >=
      vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue172 - 1].fx
    ) {
      let vennDiagramDHZGUBPPValue379 = false;
      if (
        (vennDiagramDHZGUBPPValue176.fx > vennDiagramDHZGUBPPValue233.fx
          ? (vennDiagramDHZGUBPPHelper15(
              vennDiagramDHZGUBPPValue177,
              1 + vennDiagramDHZGUBPPValue169,
              vennDiagramDHZGUBPPValue175,
              -vennDiagramDHZGUBPPValue169,
              vennDiagramDHZGUBPPValue233,
            ),
            (vennDiagramDHZGUBPPValue177.fx = vennDiagramDHZGUBPPParam23(
              vennDiagramDHZGUBPPValue177,
            )),
            vennDiagramDHZGUBPPValue177.fx < vennDiagramDHZGUBPPValue233.fx
              ? vennDiagramDHZGUBPPHelper59(vennDiagramDHZGUBPPValue177)
              : (vennDiagramDHZGUBPPValue379 = true))
          : (vennDiagramDHZGUBPPHelper15(
              vennDiagramDHZGUBPPValue177,
              1 - vennDiagramDHZGUBPPValue169 * vennDiagramDHZGUBPPValue167,
              vennDiagramDHZGUBPPValue175,
              vennDiagramDHZGUBPPValue169 * vennDiagramDHZGUBPPValue167,
              vennDiagramDHZGUBPPValue233,
            ),
            (vennDiagramDHZGUBPPValue177.fx = vennDiagramDHZGUBPPParam23(
              vennDiagramDHZGUBPPValue177,
            )),
            vennDiagramDHZGUBPPValue177.fx < vennDiagramDHZGUBPPValue176.fx
              ? vennDiagramDHZGUBPPHelper59(vennDiagramDHZGUBPPValue177)
              : (vennDiagramDHZGUBPPValue379 = true)),
        vennDiagramDHZGUBPPValue379)
      ) {
        if (vennDiagramDHZGUBPPValue170 >= 1) break;
        for (
          let vennDiagramDHZGUBPPValue502 = 1;
          vennDiagramDHZGUBPPValue502 < vennDiagramDHZGUBPPValue173.length;
          ++vennDiagramDHZGUBPPValue502
        ) {
          vennDiagramDHZGUBPPHelper15(
            vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue502],
            1 - vennDiagramDHZGUBPPValue170,
            vennDiagramDHZGUBPPValue173[0],
            vennDiagramDHZGUBPPValue170,
            vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue502],
          );
          vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue502].fx =
            vennDiagramDHZGUBPPParam23(
              vennDiagramDHZGUBPPValue173[vennDiagramDHZGUBPPValue502],
            );
        }
      }
    } else vennDiagramDHZGUBPPHelper59(vennDiagramDHZGUBPPValue176);
  }
  return (
    vennDiagramDHZGUBPPValue173.sort(vennDiagramDHZGUBPPValue174),
    {
      fx: vennDiagramDHZGUBPPValue173[0].fx,
      x: vennDiagramDHZGUBPPValue173[0],
    }
  );
}
function vennDiagramDHZGUBPPHelper17(
  vennDiagramDHZGUBPPParam58,
  vennDiagramDHZGUBPPParam59,
  vennDiagramDHZGUBPPParam60,
  vennDiagramDHZGUBPPParam61,
  vennDiagramDHZGUBPPParam62,
  vennDiagramDHZGUBPPParam63,
  vennDiagramDHZGUBPPParam64,
) {
  let vennDiagramDHZGUBPPValue283 = vennDiagramDHZGUBPPParam60.fx,
    vennDiagramDHZGUBPPValue284 = vennDiagramDHZGUBPPHelper12(
      vennDiagramDHZGUBPPParam60.fxprime,
      vennDiagramDHZGUBPPParam59,
    ),
    vennDiagramDHZGUBPPValue285 = vennDiagramDHZGUBPPValue283,
    vennDiagramDHZGUBPPValue286 = vennDiagramDHZGUBPPValue283,
    vennDiagramDHZGUBPPValue287 = vennDiagramDHZGUBPPValue284,
    vennDiagramDHZGUBPPValue288 = 0;
  vennDiagramDHZGUBPPParam62 ||= 1;
  vennDiagramDHZGUBPPParam63 ||= 1e-6;
  vennDiagramDHZGUBPPParam64 ||= 0.1;
  function vennDiagramDHZGUBPPHelper64(
    vennDiagramDHZGUBPPParam103,
    vennDiagramDHZGUBPPParam104,
    vennDiagramDHZGUBPPParam105,
  ) {
    for (
      let vennDiagramDHZGUBPPValue400 = 0;
      vennDiagramDHZGUBPPValue400 < 16;
      ++vennDiagramDHZGUBPPValue400
    )
      if (
        ((vennDiagramDHZGUBPPParam62 =
          (vennDiagramDHZGUBPPParam103 + vennDiagramDHZGUBPPParam104) / 2),
        vennDiagramDHZGUBPPHelper15(
          vennDiagramDHZGUBPPParam61.x,
          1,
          vennDiagramDHZGUBPPParam60.x,
          vennDiagramDHZGUBPPParam62,
          vennDiagramDHZGUBPPParam59,
        ),
        (vennDiagramDHZGUBPPValue285 = vennDiagramDHZGUBPPParam61.fx =
          vennDiagramDHZGUBPPParam58(
            vennDiagramDHZGUBPPParam61.x,
            vennDiagramDHZGUBPPParam61.fxprime,
          )),
        (vennDiagramDHZGUBPPValue287 = vennDiagramDHZGUBPPHelper12(
          vennDiagramDHZGUBPPParam61.fxprime,
          vennDiagramDHZGUBPPParam59,
        )),
        vennDiagramDHZGUBPPValue285 >
          vennDiagramDHZGUBPPValue283 +
            vennDiagramDHZGUBPPParam63 *
              vennDiagramDHZGUBPPParam62 *
              vennDiagramDHZGUBPPValue284 ||
          vennDiagramDHZGUBPPValue285 >= vennDiagramDHZGUBPPParam105)
      )
        vennDiagramDHZGUBPPParam104 = vennDiagramDHZGUBPPParam62;
      else {
        if (
          Math.abs(vennDiagramDHZGUBPPValue287) <=
          -vennDiagramDHZGUBPPParam64 * vennDiagramDHZGUBPPValue284
        )
          return vennDiagramDHZGUBPPParam62;
        vennDiagramDHZGUBPPValue287 *
          (vennDiagramDHZGUBPPParam104 - vennDiagramDHZGUBPPParam103) >=
          0 && (vennDiagramDHZGUBPPParam104 = vennDiagramDHZGUBPPParam103);
        vennDiagramDHZGUBPPParam103 = vennDiagramDHZGUBPPParam62;
        vennDiagramDHZGUBPPParam105 = vennDiagramDHZGUBPPValue285;
      }
    return 0;
  }
  for (
    let vennDiagramDHZGUBPPValue393 = 0;
    vennDiagramDHZGUBPPValue393 < 10;
    ++vennDiagramDHZGUBPPValue393
  ) {
    if (
      (vennDiagramDHZGUBPPHelper15(
        vennDiagramDHZGUBPPParam61.x,
        1,
        vennDiagramDHZGUBPPParam60.x,
        vennDiagramDHZGUBPPParam62,
        vennDiagramDHZGUBPPParam59,
      ),
      (vennDiagramDHZGUBPPValue285 = vennDiagramDHZGUBPPParam61.fx =
        vennDiagramDHZGUBPPParam58(
          vennDiagramDHZGUBPPParam61.x,
          vennDiagramDHZGUBPPParam61.fxprime,
        )),
      (vennDiagramDHZGUBPPValue287 = vennDiagramDHZGUBPPHelper12(
        vennDiagramDHZGUBPPParam61.fxprime,
        vennDiagramDHZGUBPPParam59,
      )),
      vennDiagramDHZGUBPPValue285 >
        vennDiagramDHZGUBPPValue283 +
          vennDiagramDHZGUBPPParam63 *
            vennDiagramDHZGUBPPParam62 *
            vennDiagramDHZGUBPPValue284 ||
        (vennDiagramDHZGUBPPValue393 &&
          vennDiagramDHZGUBPPValue285 >= vennDiagramDHZGUBPPValue286))
    )
      return vennDiagramDHZGUBPPHelper64(
        vennDiagramDHZGUBPPValue288,
        vennDiagramDHZGUBPPParam62,
        vennDiagramDHZGUBPPValue286,
      );
    if (
      Math.abs(vennDiagramDHZGUBPPValue287) <=
      -vennDiagramDHZGUBPPParam64 * vennDiagramDHZGUBPPValue284
    )
      return vennDiagramDHZGUBPPParam62;
    if (vennDiagramDHZGUBPPValue287 >= 0)
      return vennDiagramDHZGUBPPHelper64(
        vennDiagramDHZGUBPPParam62,
        vennDiagramDHZGUBPPValue288,
        vennDiagramDHZGUBPPValue285,
      );
    vennDiagramDHZGUBPPValue286 = vennDiagramDHZGUBPPValue285;
    vennDiagramDHZGUBPPValue288 = vennDiagramDHZGUBPPParam62;
    vennDiagramDHZGUBPPParam62 *= 2;
  }
  return vennDiagramDHZGUBPPParam62;
}
function vennDiagramDHZGUBPPHelper18(
  vennDiagramDHZGUBPPParam49,
  vennDiagramDHZGUBPPParam50,
  vennDiagramDHZGUBPPParam51,
) {
  let vennDiagramDHZGUBPPValue242 = {
      x: vennDiagramDHZGUBPPParam50.slice(),
      fx: 0,
      fxprime: vennDiagramDHZGUBPPParam50.slice(),
    },
    vennDiagramDHZGUBPPValue243 = {
      x: vennDiagramDHZGUBPPParam50.slice(),
      fx: 0,
      fxprime: vennDiagramDHZGUBPPParam50.slice(),
    },
    vennDiagramDHZGUBPPValue244 = vennDiagramDHZGUBPPParam50.slice(),
    vennDiagramDHZGUBPPValue245,
    vennDiagramDHZGUBPPValue246,
    vennDiagramDHZGUBPPValue247 = 1,
    vennDiagramDHZGUBPPValue248;
  vennDiagramDHZGUBPPParam51 ||= {};
  vennDiagramDHZGUBPPValue248 =
    vennDiagramDHZGUBPPParam51.maxIterations ||
    vennDiagramDHZGUBPPParam50.length * 20;
  vennDiagramDHZGUBPPValue242.fx = vennDiagramDHZGUBPPParam49(
    vennDiagramDHZGUBPPValue242.x,
    vennDiagramDHZGUBPPValue242.fxprime,
  );
  vennDiagramDHZGUBPPValue245 = vennDiagramDHZGUBPPValue242.fxprime.slice();
  vennDiagramDHZGUBPPHelper14(
    vennDiagramDHZGUBPPValue245,
    vennDiagramDHZGUBPPValue242.fxprime,
    -1,
  );
  for (
    let vennDiagramDHZGUBPPValue324 = 0;
    vennDiagramDHZGUBPPValue324 < vennDiagramDHZGUBPPValue248;
    ++vennDiagramDHZGUBPPValue324
  ) {
    if (
      ((vennDiagramDHZGUBPPValue247 = vennDiagramDHZGUBPPHelper17(
        vennDiagramDHZGUBPPParam49,
        vennDiagramDHZGUBPPValue245,
        vennDiagramDHZGUBPPValue242,
        vennDiagramDHZGUBPPValue243,
        vennDiagramDHZGUBPPValue247,
      )),
      vennDiagramDHZGUBPPParam51.history &&
        vennDiagramDHZGUBPPParam51.history.push({
          x: vennDiagramDHZGUBPPValue242.x.slice(),
          fx: vennDiagramDHZGUBPPValue242.fx,
          fxprime: vennDiagramDHZGUBPPValue242.fxprime.slice(),
          alpha: vennDiagramDHZGUBPPValue247,
        }),
      !vennDiagramDHZGUBPPValue247)
    )
      vennDiagramDHZGUBPPHelper14(
        vennDiagramDHZGUBPPValue245,
        vennDiagramDHZGUBPPValue242.fxprime,
        -1,
      );
    else {
      vennDiagramDHZGUBPPHelper15(
        vennDiagramDHZGUBPPValue244,
        1,
        vennDiagramDHZGUBPPValue243.fxprime,
        -1,
        vennDiagramDHZGUBPPValue242.fxprime,
      );
      let vennDiagramDHZGUBPPValue423 = vennDiagramDHZGUBPPHelper12(
          vennDiagramDHZGUBPPValue242.fxprime,
          vennDiagramDHZGUBPPValue242.fxprime,
        ),
        vennDiagramDHZGUBPPValue424 = Math.max(
          0,
          vennDiagramDHZGUBPPHelper12(
            vennDiagramDHZGUBPPValue244,
            vennDiagramDHZGUBPPValue243.fxprime,
          ) / vennDiagramDHZGUBPPValue423,
        );
      vennDiagramDHZGUBPPHelper15(
        vennDiagramDHZGUBPPValue245,
        vennDiagramDHZGUBPPValue424,
        vennDiagramDHZGUBPPValue245,
        -1,
        vennDiagramDHZGUBPPValue243.fxprime,
      );
      vennDiagramDHZGUBPPValue246 = vennDiagramDHZGUBPPValue242;
      vennDiagramDHZGUBPPValue242 = vennDiagramDHZGUBPPValue243;
      vennDiagramDHZGUBPPValue243 = vennDiagramDHZGUBPPValue246;
    }
    if (
      vennDiagramDHZGUBPPHelper13(vennDiagramDHZGUBPPValue242.fxprime) <= 1e-5
    )
      break;
  }
  return (
    vennDiagramDHZGUBPPParam51.history &&
      vennDiagramDHZGUBPPParam51.history.push({
        x: vennDiagramDHZGUBPPValue242.x.slice(),
        fx: vennDiagramDHZGUBPPValue242.fx,
        fxprime: vennDiagramDHZGUBPPValue242.fxprime.slice(),
        alpha: vennDiagramDHZGUBPPValue247,
      }),
    vennDiagramDHZGUBPPValue242
  );
}
function vennDiagramDHZGUBPPHelper19(
  vennDiagramDHZGUBPPParam73,
  vennDiagramDHZGUBPPParam74 = {},
) {
  vennDiagramDHZGUBPPParam74.maxIterations =
    vennDiagramDHZGUBPPParam74.maxIterations || 500;
  let vennDiagramDHZGUBPPValue300 =
      vennDiagramDHZGUBPPParam74.initialLayout || vennDiagramDHZGUBPPHelper24,
    vennDiagramDHZGUBPPValue301 =
      vennDiagramDHZGUBPPParam74.lossFunction || vennDiagramDHZGUBPPHelper27,
    vennDiagramDHZGUBPPValue302 = vennDiagramDHZGUBPPHelper21(
      vennDiagramDHZGUBPPParam73,
      vennDiagramDHZGUBPPParam74,
    ),
    vennDiagramDHZGUBPPValue303 = vennDiagramDHZGUBPPValue300(
      vennDiagramDHZGUBPPValue302,
      vennDiagramDHZGUBPPParam74,
    ),
    vennDiagramDHZGUBPPValue304 = Object.keys(vennDiagramDHZGUBPPValue303),
    vennDiagramDHZGUBPPValue305 = [];
  for (let vennDiagramDHZGUBPPValue541 of vennDiagramDHZGUBPPValue304) {
    vennDiagramDHZGUBPPValue305.push(
      vennDiagramDHZGUBPPValue303[vennDiagramDHZGUBPPValue541].x,
    );
    vennDiagramDHZGUBPPValue305.push(
      vennDiagramDHZGUBPPValue303[vennDiagramDHZGUBPPValue541].y,
    );
  }
  let vennDiagramDHZGUBPPValue306 = vennDiagramDHZGUBPPHelper16(
    (vennDiagramDHZGUBPPParam127) => {
      let vennDiagramDHZGUBPPValue440 = {};
      for (
        let vennDiagramDHZGUBPPValue477 = 0;
        vennDiagramDHZGUBPPValue477 < vennDiagramDHZGUBPPValue304.length;
        ++vennDiagramDHZGUBPPValue477
      ) {
        let vennDiagramDHZGUBPPValue520 =
          vennDiagramDHZGUBPPValue304[vennDiagramDHZGUBPPValue477];
        vennDiagramDHZGUBPPValue440[vennDiagramDHZGUBPPValue520] = {
          x: vennDiagramDHZGUBPPParam127[2 * vennDiagramDHZGUBPPValue477],
          y: vennDiagramDHZGUBPPParam127[2 * vennDiagramDHZGUBPPValue477 + 1],
          radius:
            vennDiagramDHZGUBPPValue303[vennDiagramDHZGUBPPValue520].radius,
        };
      }
      return vennDiagramDHZGUBPPValue301(
        vennDiagramDHZGUBPPValue440,
        vennDiagramDHZGUBPPValue302,
      );
    },
    vennDiagramDHZGUBPPValue305,
    vennDiagramDHZGUBPPParam74,
  ).x;
  for (
    let vennDiagramDHZGUBPPValue494 = 0;
    vennDiagramDHZGUBPPValue494 < vennDiagramDHZGUBPPValue304.length;
    ++vennDiagramDHZGUBPPValue494
  ) {
    let vennDiagramDHZGUBPPValue544 =
      vennDiagramDHZGUBPPValue304[vennDiagramDHZGUBPPValue494];
    vennDiagramDHZGUBPPValue303[vennDiagramDHZGUBPPValue544].x =
      vennDiagramDHZGUBPPValue306[2 * vennDiagramDHZGUBPPValue494];
    vennDiagramDHZGUBPPValue303[vennDiagramDHZGUBPPValue544].y =
      vennDiagramDHZGUBPPValue306[2 * vennDiagramDHZGUBPPValue494 + 1];
  }
  return vennDiagramDHZGUBPPValue303;
}
function vennDiagramDHZGUBPPHelper20(
  vennDiagramDHZGUBPPParam131,
  vennDiagramDHZGUBPPParam132,
  vennDiagramDHZGUBPPParam133,
) {
  return Math.min(vennDiagramDHZGUBPPParam131, vennDiagramDHZGUBPPParam132) *
    Math.min(vennDiagramDHZGUBPPParam131, vennDiagramDHZGUBPPParam132) *
    Math.PI <=
    vennDiagramDHZGUBPPParam133 + 1e-10
    ? Math.abs(vennDiagramDHZGUBPPParam131 - vennDiagramDHZGUBPPParam132)
    : vennDiagramDHZGUBPPHelper9(
        (vennDiagramDHZGUBPPParam240) =>
          vennDiagramDHZGUBPPHelper6(
            vennDiagramDHZGUBPPParam131,
            vennDiagramDHZGUBPPParam132,
            vennDiagramDHZGUBPPParam240,
          ) - vennDiagramDHZGUBPPParam133,
        0,
        vennDiagramDHZGUBPPParam131 + vennDiagramDHZGUBPPParam132,
      );
}
function vennDiagramDHZGUBPPHelper21(
  vennDiagramDHZGUBPPParam38,
  vennDiagramDHZGUBPPParam39 = {},
) {
  let vennDiagramDHZGUBPPValue212 = vennDiagramDHZGUBPPParam39.distinct,
    vennDiagramDHZGUBPPValue213 = vennDiagramDHZGUBPPParam38.map((item) =>
      Object.assign({}, item),
    );
  function vennDiagramDHZGUBPPHelper61(vennDiagramDHZGUBPPParam213) {
    return vennDiagramDHZGUBPPParam213.join(";");
  }
  if (vennDiagramDHZGUBPPValue212) {
    let vennDiagramDHZGUBPPValue320 = new Map();
    for (let vennDiagramDHZGUBPPValue354 of vennDiagramDHZGUBPPValue213)
      for (
        let vennDiagramDHZGUBPPValue365 = 0;
        vennDiagramDHZGUBPPValue365 < vennDiagramDHZGUBPPValue354.sets.length;
        vennDiagramDHZGUBPPValue365++
      ) {
        let vennDiagramDHZGUBPPValue380 = String(
          vennDiagramDHZGUBPPValue354.sets[vennDiagramDHZGUBPPValue365],
        );
        vennDiagramDHZGUBPPValue320.set(
          vennDiagramDHZGUBPPValue380,
          vennDiagramDHZGUBPPValue354.size +
            (vennDiagramDHZGUBPPValue320.get(vennDiagramDHZGUBPPValue380) || 0),
        );
        for (
          let vennDiagramDHZGUBPPValue408 = vennDiagramDHZGUBPPValue365 + 1;
          vennDiagramDHZGUBPPValue408 < vennDiagramDHZGUBPPValue354.sets.length;
          vennDiagramDHZGUBPPValue408++
        ) {
          let vennDiagramDHZGUBPPValue437 = String(
              vennDiagramDHZGUBPPValue354.sets[vennDiagramDHZGUBPPValue408],
            ),
            vennDiagramDHZGUBPPValue438 = `${vennDiagramDHZGUBPPValue380};${vennDiagramDHZGUBPPValue437}`,
            vennDiagramDHZGUBPPValue439 = `${vennDiagramDHZGUBPPValue437};${vennDiagramDHZGUBPPValue380}`;
          vennDiagramDHZGUBPPValue320.set(
            vennDiagramDHZGUBPPValue438,
            vennDiagramDHZGUBPPValue354.size +
              (vennDiagramDHZGUBPPValue320.get(vennDiagramDHZGUBPPValue438) ||
                0),
          );
          vennDiagramDHZGUBPPValue320.set(
            vennDiagramDHZGUBPPValue439,
            vennDiagramDHZGUBPPValue354.size +
              (vennDiagramDHZGUBPPValue320.get(vennDiagramDHZGUBPPValue439) ||
                0),
          );
        }
      }
    for (let vennDiagramDHZGUBPPValue522 of vennDiagramDHZGUBPPValue213)
      vennDiagramDHZGUBPPValue522.sets.length < 3 &&
        (vennDiagramDHZGUBPPValue522.size = vennDiagramDHZGUBPPValue320.get(
          vennDiagramDHZGUBPPHelper61(vennDiagramDHZGUBPPValue522.sets),
        ));
  }
  let vennDiagramDHZGUBPPValue214 = [],
    vennDiagramDHZGUBPPValue215 = new Set();
  for (let vennDiagramDHZGUBPPValue412 of vennDiagramDHZGUBPPValue213)
    if (vennDiagramDHZGUBPPValue412.sets.length === 1)
      vennDiagramDHZGUBPPValue214.push(vennDiagramDHZGUBPPValue412.sets[0]);
    else if (vennDiagramDHZGUBPPValue412.sets.length === 2) {
      let vennDiagramDHZGUBPPValue513 = vennDiagramDHZGUBPPValue412.sets[0],
        vennDiagramDHZGUBPPValue514 = vennDiagramDHZGUBPPValue412.sets[1];
      vennDiagramDHZGUBPPValue215.add(
        vennDiagramDHZGUBPPHelper61(vennDiagramDHZGUBPPValue412.sets),
      );
      vennDiagramDHZGUBPPValue215.add(
        vennDiagramDHZGUBPPHelper61([
          vennDiagramDHZGUBPPValue514,
          vennDiagramDHZGUBPPValue513,
        ]),
      );
    }
  vennDiagramDHZGUBPPValue214.sort(
    (vennDiagramDHZGUBPPParam223, vennDiagramDHZGUBPPParam224) =>
      vennDiagramDHZGUBPPParam223 === vennDiagramDHZGUBPPParam224
        ? 0
        : vennDiagramDHZGUBPPParam223 < vennDiagramDHZGUBPPParam224
          ? -1
          : 1,
  );
  for (
    let vennDiagramDHZGUBPPValue421 = 0;
    vennDiagramDHZGUBPPValue421 < vennDiagramDHZGUBPPValue214.length;
    ++vennDiagramDHZGUBPPValue421
  ) {
    let vennDiagramDHZGUBPPValue458 =
      vennDiagramDHZGUBPPValue214[vennDiagramDHZGUBPPValue421];
    for (
      let vennDiagramDHZGUBPPValue476 = vennDiagramDHZGUBPPValue421 + 1;
      vennDiagramDHZGUBPPValue476 < vennDiagramDHZGUBPPValue214.length;
      ++vennDiagramDHZGUBPPValue476
    ) {
      let vennDiagramDHZGUBPPValue523 =
        vennDiagramDHZGUBPPValue214[vennDiagramDHZGUBPPValue476];
      vennDiagramDHZGUBPPValue215.has(
        vennDiagramDHZGUBPPHelper61([
          vennDiagramDHZGUBPPValue458,
          vennDiagramDHZGUBPPValue523,
        ]),
      ) ||
        vennDiagramDHZGUBPPValue213.push({
          sets: [vennDiagramDHZGUBPPValue458, vennDiagramDHZGUBPPValue523],
          size: 0,
        });
    }
  }
  return vennDiagramDHZGUBPPValue213;
}
function vennDiagramDHZGUBPPHelper22(
  vennDiagramDHZGUBPPParam81,
  vennDiagramDHZGUBPPParam82,
  vennDiagramDHZGUBPPParam83,
) {
  let vennDiagramDHZGUBPPValue313 = vennDiagramDHZGUBPPHelper11(
      vennDiagramDHZGUBPPParam82.length,
      vennDiagramDHZGUBPPParam82.length,
    ),
    vennDiagramDHZGUBPPValue314 = vennDiagramDHZGUBPPHelper11(
      vennDiagramDHZGUBPPParam82.length,
      vennDiagramDHZGUBPPParam82.length,
    );
  return (
    vennDiagramDHZGUBPPParam81
      .filter((item) => item.sets.length === 2)
      .forEach((item) => {
        let vennDiagramDHZGUBPPValue373 =
            vennDiagramDHZGUBPPParam83[item.sets[0]],
          vennDiagramDHZGUBPPValue374 =
            vennDiagramDHZGUBPPParam83[item.sets[1]],
          vennDiagramDHZGUBPPValue375 = vennDiagramDHZGUBPPHelper20(
            Math.sqrt(
              vennDiagramDHZGUBPPParam82[vennDiagramDHZGUBPPValue373].size /
                Math.PI,
            ),
            Math.sqrt(
              vennDiagramDHZGUBPPParam82[vennDiagramDHZGUBPPValue374].size /
                Math.PI,
            ),
            item.size,
          );
        vennDiagramDHZGUBPPValue313[vennDiagramDHZGUBPPValue373][
          vennDiagramDHZGUBPPValue374
        ] = vennDiagramDHZGUBPPValue313[vennDiagramDHZGUBPPValue374][
          vennDiagramDHZGUBPPValue373
        ] = vennDiagramDHZGUBPPValue375;
        let vennDiagramDHZGUBPPValue376 = 0;
        item.size + 1e-10 >=
        Math.min(
          vennDiagramDHZGUBPPParam82[vennDiagramDHZGUBPPValue373].size,
          vennDiagramDHZGUBPPParam82[vennDiagramDHZGUBPPValue374].size,
        )
          ? (vennDiagramDHZGUBPPValue376 = 1)
          : item.size <= 1e-10 && (vennDiagramDHZGUBPPValue376 = -1);
        vennDiagramDHZGUBPPValue314[vennDiagramDHZGUBPPValue373][
          vennDiagramDHZGUBPPValue374
        ] = vennDiagramDHZGUBPPValue314[vennDiagramDHZGUBPPValue374][
          vennDiagramDHZGUBPPValue373
        ] = vennDiagramDHZGUBPPValue376;
      }),
    {
      distances: vennDiagramDHZGUBPPValue313,
      constraints: vennDiagramDHZGUBPPValue314,
    }
  );
}
function vennDiagramDHZGUBPPHelper23(
  vennDiagramDHZGUBPPParam84,
  vennDiagramDHZGUBPPParam85,
  vennDiagramDHZGUBPPParam86,
  vennDiagramDHZGUBPPParam87,
) {
  for (
    let vennDiagramDHZGUBPPValue558 = 0;
    vennDiagramDHZGUBPPValue558 < vennDiagramDHZGUBPPParam85.length;
    ++vennDiagramDHZGUBPPValue558
  )
    vennDiagramDHZGUBPPParam85[vennDiagramDHZGUBPPValue558] = 0;
  let vennDiagramDHZGUBPPValue315 = 0;
  for (
    let vennDiagramDHZGUBPPValue345 = 0;
    vennDiagramDHZGUBPPValue345 < vennDiagramDHZGUBPPParam86.length;
    ++vennDiagramDHZGUBPPValue345
  ) {
    let vennDiagramDHZGUBPPValue350 =
        vennDiagramDHZGUBPPParam84[2 * vennDiagramDHZGUBPPValue345],
      vennDiagramDHZGUBPPValue351 =
        vennDiagramDHZGUBPPParam84[2 * vennDiagramDHZGUBPPValue345 + 1];
    for (
      let vennDiagramDHZGUBPPValue366 = vennDiagramDHZGUBPPValue345 + 1;
      vennDiagramDHZGUBPPValue366 < vennDiagramDHZGUBPPParam86.length;
      ++vennDiagramDHZGUBPPValue366
    ) {
      let vennDiagramDHZGUBPPValue381 =
          vennDiagramDHZGUBPPParam84[2 * vennDiagramDHZGUBPPValue366],
        vennDiagramDHZGUBPPValue382 =
          vennDiagramDHZGUBPPParam84[2 * vennDiagramDHZGUBPPValue366 + 1],
        vennDiagramDHZGUBPPValue383 =
          vennDiagramDHZGUBPPParam86[vennDiagramDHZGUBPPValue345][
            vennDiagramDHZGUBPPValue366
          ],
        vennDiagramDHZGUBPPValue384 =
          vennDiagramDHZGUBPPParam87[vennDiagramDHZGUBPPValue345][
            vennDiagramDHZGUBPPValue366
          ],
        vennDiagramDHZGUBPPValue385 =
          (vennDiagramDHZGUBPPValue381 - vennDiagramDHZGUBPPValue350) *
            (vennDiagramDHZGUBPPValue381 - vennDiagramDHZGUBPPValue350) +
          (vennDiagramDHZGUBPPValue382 - vennDiagramDHZGUBPPValue351) *
            (vennDiagramDHZGUBPPValue382 - vennDiagramDHZGUBPPValue351),
        vennDiagramDHZGUBPPValue386 = Math.sqrt(vennDiagramDHZGUBPPValue385),
        vennDiagramDHZGUBPPValue387 =
          vennDiagramDHZGUBPPValue385 -
          vennDiagramDHZGUBPPValue383 * vennDiagramDHZGUBPPValue383;
      (vennDiagramDHZGUBPPValue384 > 0 &&
        vennDiagramDHZGUBPPValue386 <= vennDiagramDHZGUBPPValue383) ||
        (vennDiagramDHZGUBPPValue384 < 0 &&
          vennDiagramDHZGUBPPValue386 >= vennDiagramDHZGUBPPValue383) ||
        ((vennDiagramDHZGUBPPValue315 +=
          2 * vennDiagramDHZGUBPPValue387 * vennDiagramDHZGUBPPValue387),
        (vennDiagramDHZGUBPPParam85[2 * vennDiagramDHZGUBPPValue345] +=
          4 *
          vennDiagramDHZGUBPPValue387 *
          (vennDiagramDHZGUBPPValue350 - vennDiagramDHZGUBPPValue381)),
        (vennDiagramDHZGUBPPParam85[2 * vennDiagramDHZGUBPPValue345 + 1] +=
          4 *
          vennDiagramDHZGUBPPValue387 *
          (vennDiagramDHZGUBPPValue351 - vennDiagramDHZGUBPPValue382)),
        (vennDiagramDHZGUBPPParam85[2 * vennDiagramDHZGUBPPValue366] +=
          4 *
          vennDiagramDHZGUBPPValue387 *
          (vennDiagramDHZGUBPPValue381 - vennDiagramDHZGUBPPValue350)),
        (vennDiagramDHZGUBPPParam85[2 * vennDiagramDHZGUBPPValue366 + 1] +=
          4 *
          vennDiagramDHZGUBPPValue387 *
          (vennDiagramDHZGUBPPValue382 - vennDiagramDHZGUBPPValue351)));
    }
  }
  return vennDiagramDHZGUBPPValue315;
}
function vennDiagramDHZGUBPPHelper24(
  vennDiagramDHZGUBPPParam120,
  vennDiagramDHZGUBPPParam121 = {},
) {
  let vennDiagramDHZGUBPPValue419 = vennDiagramDHZGUBPPHelper26(
      vennDiagramDHZGUBPPParam120,
      vennDiagramDHZGUBPPParam121,
    ),
    vennDiagramDHZGUBPPValue420 =
      vennDiagramDHZGUBPPParam121.lossFunction || vennDiagramDHZGUBPPHelper27;
  if (vennDiagramDHZGUBPPParam120.length >= 8) {
    let vennDiagramDHZGUBPPValue534 = vennDiagramDHZGUBPPHelper25(
        vennDiagramDHZGUBPPParam120,
        vennDiagramDHZGUBPPParam121,
      ),
      vennDiagramDHZGUBPPValue535 = vennDiagramDHZGUBPPValue420(
        vennDiagramDHZGUBPPValue534,
        vennDiagramDHZGUBPPParam120,
      ),
      vennDiagramDHZGUBPPValue536 = vennDiagramDHZGUBPPValue420(
        vennDiagramDHZGUBPPValue419,
        vennDiagramDHZGUBPPParam120,
      );
    vennDiagramDHZGUBPPValue535 + 1e-8 < vennDiagramDHZGUBPPValue536 &&
      (vennDiagramDHZGUBPPValue419 = vennDiagramDHZGUBPPValue534);
  }
  return vennDiagramDHZGUBPPValue419;
}
function vennDiagramDHZGUBPPHelper25(
  vennDiagramDHZGUBPPParam56,
  vennDiagramDHZGUBPPParam57 = {},
) {
  let vennDiagramDHZGUBPPValue275 = vennDiagramDHZGUBPPParam57.restarts || 10,
    vennDiagramDHZGUBPPValue276 = [],
    vennDiagramDHZGUBPPValue277 = {};
  for (let vennDiagramDHZGUBPPValue497 of vennDiagramDHZGUBPPParam56)
    vennDiagramDHZGUBPPValue497.sets.length === 1 &&
      ((vennDiagramDHZGUBPPValue277[vennDiagramDHZGUBPPValue497.sets[0]] =
        vennDiagramDHZGUBPPValue276.length),
      vennDiagramDHZGUBPPValue276.push(vennDiagramDHZGUBPPValue497));
  let { distances, constraints } = vennDiagramDHZGUBPPHelper22(
      vennDiagramDHZGUBPPParam56,
      vennDiagramDHZGUBPPValue276,
      vennDiagramDHZGUBPPValue277,
    ),
    vennDiagramDHZGUBPPValue278 =
      vennDiagramDHZGUBPPHelper13(distances.map(vennDiagramDHZGUBPPHelper13)) /
      distances.length;
  distances = distances.map((item) =>
    item.map((_item) => _item / vennDiagramDHZGUBPPValue278),
  );
  let vennDiagramDHZGUBPPValue279 = (
      vennDiagramDHZGUBPPParam233,
      vennDiagramDHZGUBPPParam234,
    ) =>
      vennDiagramDHZGUBPPHelper23(
        vennDiagramDHZGUBPPParam233,
        vennDiagramDHZGUBPPParam234,
        distances,
        constraints,
      ),
    vennDiagramDHZGUBPPValue280 = null;
  for (
    let vennDiagramDHZGUBPPValue472 = 0;
    vennDiagramDHZGUBPPValue472 < vennDiagramDHZGUBPPValue275;
    ++vennDiagramDHZGUBPPValue472
  ) {
    let vennDiagramDHZGUBPPValue495 = vennDiagramDHZGUBPPHelper18(
      vennDiagramDHZGUBPPValue279,
      vennDiagramDHZGUBPPHelper10(distances.length * 2).map(Math.random),
      vennDiagramDHZGUBPPParam57,
    );
    (!vennDiagramDHZGUBPPValue280 ||
      vennDiagramDHZGUBPPValue495.fx < vennDiagramDHZGUBPPValue280.fx) &&
      (vennDiagramDHZGUBPPValue280 = vennDiagramDHZGUBPPValue495);
  }
  let vennDiagramDHZGUBPPValue281 = vennDiagramDHZGUBPPValue280.x,
    vennDiagramDHZGUBPPValue282 = {};
  for (
    let vennDiagramDHZGUBPPValue441 = 0;
    vennDiagramDHZGUBPPValue441 < vennDiagramDHZGUBPPValue276.length;
    ++vennDiagramDHZGUBPPValue441
  ) {
    let vennDiagramDHZGUBPPValue479 =
      vennDiagramDHZGUBPPValue276[vennDiagramDHZGUBPPValue441];
    vennDiagramDHZGUBPPValue282[vennDiagramDHZGUBPPValue479.sets[0]] = {
      x:
        vennDiagramDHZGUBPPValue281[2 * vennDiagramDHZGUBPPValue441] *
        vennDiagramDHZGUBPPValue278,
      y:
        vennDiagramDHZGUBPPValue281[2 * vennDiagramDHZGUBPPValue441 + 1] *
        vennDiagramDHZGUBPPValue278,
      radius: Math.sqrt(vennDiagramDHZGUBPPValue479.size / Math.PI),
    };
  }
  if (vennDiagramDHZGUBPPParam57.history)
    for (let vennDiagramDHZGUBPPValue560 of vennDiagramDHZGUBPPParam57.history)
      vennDiagramDHZGUBPPHelper14(
        vennDiagramDHZGUBPPValue560.x,
        vennDiagramDHZGUBPPValue278,
      );
  return vennDiagramDHZGUBPPValue282;
}
function vennDiagramDHZGUBPPHelper26(
  vennDiagramDHZGUBPPParam21,
  vennDiagramDHZGUBPPParam22,
) {
  let vennDiagramDHZGUBPPValue156 =
      vennDiagramDHZGUBPPParam22 && vennDiagramDHZGUBPPParam22.lossFunction
        ? vennDiagramDHZGUBPPParam22.lossFunction
        : vennDiagramDHZGUBPPHelper27,
    vennDiagramDHZGUBPPValue157 = {},
    vennDiagramDHZGUBPPValue158 = {};
  for (let vennDiagramDHZGUBPPValue413 of vennDiagramDHZGUBPPParam21)
    if (vennDiagramDHZGUBPPValue413.sets.length === 1) {
      let vennDiagramDHZGUBPPValue451 = vennDiagramDHZGUBPPValue413.sets[0];
      vennDiagramDHZGUBPPValue157[vennDiagramDHZGUBPPValue451] = {
        x: 1e10,
        y: 1e10,
        rowid: vennDiagramDHZGUBPPValue157.length,
        size: vennDiagramDHZGUBPPValue413.size,
        radius: Math.sqrt(vennDiagramDHZGUBPPValue413.size / Math.PI),
      };
      vennDiagramDHZGUBPPValue158[vennDiagramDHZGUBPPValue451] = [];
    }
  vennDiagramDHZGUBPPParam21 = vennDiagramDHZGUBPPParam21.filter(
    (item) => item.sets.length === 2,
  );
  for (let vennDiagramDHZGUBPPValue389 of vennDiagramDHZGUBPPParam21) {
    let vennDiagramDHZGUBPPValue394 =
        vennDiagramDHZGUBPPValue389.weight == null
          ? 1
          : vennDiagramDHZGUBPPValue389.weight,
      vennDiagramDHZGUBPPValue395 = vennDiagramDHZGUBPPValue389.sets[0],
      vennDiagramDHZGUBPPValue396 = vennDiagramDHZGUBPPValue389.sets[1];
    vennDiagramDHZGUBPPValue389.size + 1e-10 >=
      Math.min(
        vennDiagramDHZGUBPPValue157[vennDiagramDHZGUBPPValue395].size,
        vennDiagramDHZGUBPPValue157[vennDiagramDHZGUBPPValue396].size,
      ) && (vennDiagramDHZGUBPPValue394 = 0);
    vennDiagramDHZGUBPPValue158[vennDiagramDHZGUBPPValue395].push({
      set: vennDiagramDHZGUBPPValue396,
      size: vennDiagramDHZGUBPPValue389.size,
      weight: vennDiagramDHZGUBPPValue394,
    });
    vennDiagramDHZGUBPPValue158[vennDiagramDHZGUBPPValue396].push({
      set: vennDiagramDHZGUBPPValue395,
      size: vennDiagramDHZGUBPPValue389.size,
      weight: vennDiagramDHZGUBPPValue394,
    });
  }
  let vennDiagramDHZGUBPPValue159 = [];
  Object.keys(vennDiagramDHZGUBPPValue158).forEach((item) => {
    let vennDiagramDHZGUBPPValue461 = 0;
    for (
      let vennDiagramDHZGUBPPValue515 = 0;
      vennDiagramDHZGUBPPValue515 < vennDiagramDHZGUBPPValue158[item].length;
      ++vennDiagramDHZGUBPPValue515
    )
      vennDiagramDHZGUBPPValue461 +=
        vennDiagramDHZGUBPPValue158[item][vennDiagramDHZGUBPPValue515].size *
        vennDiagramDHZGUBPPValue158[item][vennDiagramDHZGUBPPValue515].weight;
    vennDiagramDHZGUBPPValue159.push({
      set: item,
      size: vennDiagramDHZGUBPPValue461,
    });
  });
  function vennDiagramDHZGUBPPHelper56(
    vennDiagramDHZGUBPPParam209,
    vennDiagramDHZGUBPPParam210,
  ) {
    return vennDiagramDHZGUBPPParam210.size - vennDiagramDHZGUBPPParam209.size;
  }
  vennDiagramDHZGUBPPValue159.sort(vennDiagramDHZGUBPPHelper56);
  let vennDiagramDHZGUBPPValue160 = {};
  function vennDiagramDHZGUBPPHelper57(vennDiagramDHZGUBPPParam215) {
    return vennDiagramDHZGUBPPParam215.set in vennDiagramDHZGUBPPValue160;
  }
  function vennDiagramDHZGUBPPHelper58(
    vennDiagramDHZGUBPPParam183,
    vennDiagramDHZGUBPPParam184,
  ) {
    vennDiagramDHZGUBPPValue157[vennDiagramDHZGUBPPParam184].x =
      vennDiagramDHZGUBPPParam183.x;
    vennDiagramDHZGUBPPValue157[vennDiagramDHZGUBPPParam184].y =
      vennDiagramDHZGUBPPParam183.y;
    vennDiagramDHZGUBPPValue160[vennDiagramDHZGUBPPParam184] = true;
  }
  vennDiagramDHZGUBPPHelper58(
    {
      x: 0,
      y: 0,
    },
    vennDiagramDHZGUBPPValue159[0].set,
  );
  for (
    let vennDiagramDHZGUBPPValue264 = 1;
    vennDiagramDHZGUBPPValue264 < vennDiagramDHZGUBPPValue159.length;
    ++vennDiagramDHZGUBPPValue264
  ) {
    let vennDiagramDHZGUBPPValue266 =
        vennDiagramDHZGUBPPValue159[vennDiagramDHZGUBPPValue264].set,
      vennDiagramDHZGUBPPValue267 = vennDiagramDHZGUBPPValue158[
        vennDiagramDHZGUBPPValue266
      ].filter(vennDiagramDHZGUBPPHelper57),
      vennDiagramDHZGUBPPValue268 =
        vennDiagramDHZGUBPPValue157[vennDiagramDHZGUBPPValue266];
    if (
      (vennDiagramDHZGUBPPValue267.sort(vennDiagramDHZGUBPPHelper56),
      vennDiagramDHZGUBPPValue267.length === 0)
    )
      throw "ERROR: missing pairwise overlap information";
    let vennDiagramDHZGUBPPValue269 = [];
    for (
      var vennDiagramDHZGUBPPValue161 = 0;
      vennDiagramDHZGUBPPValue161 < vennDiagramDHZGUBPPValue267.length;
      ++vennDiagramDHZGUBPPValue161
    ) {
      let vennDiagramDHZGUBPPValue342 =
          vennDiagramDHZGUBPPValue157[
            vennDiagramDHZGUBPPValue267[vennDiagramDHZGUBPPValue161].set
          ],
        vennDiagramDHZGUBPPValue343 = vennDiagramDHZGUBPPHelper20(
          vennDiagramDHZGUBPPValue268.radius,
          vennDiagramDHZGUBPPValue342.radius,
          vennDiagramDHZGUBPPValue267[vennDiagramDHZGUBPPValue161].size,
        );
      vennDiagramDHZGUBPPValue269.push({
        x: vennDiagramDHZGUBPPValue342.x + vennDiagramDHZGUBPPValue343,
        y: vennDiagramDHZGUBPPValue342.y,
      });
      vennDiagramDHZGUBPPValue269.push({
        x: vennDiagramDHZGUBPPValue342.x - vennDiagramDHZGUBPPValue343,
        y: vennDiagramDHZGUBPPValue342.y,
      });
      vennDiagramDHZGUBPPValue269.push({
        y: vennDiagramDHZGUBPPValue342.y + vennDiagramDHZGUBPPValue343,
        x: vennDiagramDHZGUBPPValue342.x,
      });
      vennDiagramDHZGUBPPValue269.push({
        y: vennDiagramDHZGUBPPValue342.y - vennDiagramDHZGUBPPValue343,
        x: vennDiagramDHZGUBPPValue342.x,
      });
      for (
        let vennDiagramDHZGUBPPValue409 = vennDiagramDHZGUBPPValue161 + 1;
        vennDiagramDHZGUBPPValue409 < vennDiagramDHZGUBPPValue267.length;
        ++vennDiagramDHZGUBPPValue409
      ) {
        let vennDiagramDHZGUBPPValue434 =
            vennDiagramDHZGUBPPValue157[
              vennDiagramDHZGUBPPValue267[vennDiagramDHZGUBPPValue409].set
            ],
          vennDiagramDHZGUBPPValue435 = vennDiagramDHZGUBPPHelper20(
            vennDiagramDHZGUBPPValue268.radius,
            vennDiagramDHZGUBPPValue434.radius,
            vennDiagramDHZGUBPPValue267[vennDiagramDHZGUBPPValue409].size,
          ),
          vennDiagramDHZGUBPPValue436 = vennDiagramDHZGUBPPHelper7(
            {
              x: vennDiagramDHZGUBPPValue342.x,
              y: vennDiagramDHZGUBPPValue342.y,
              radius: vennDiagramDHZGUBPPValue343,
            },
            {
              x: vennDiagramDHZGUBPPValue434.x,
              y: vennDiagramDHZGUBPPValue434.y,
              radius: vennDiagramDHZGUBPPValue435,
            },
          );
        vennDiagramDHZGUBPPValue269.push(...vennDiagramDHZGUBPPValue436);
      }
    }
    let vennDiagramDHZGUBPPValue270 = 1e50,
      vennDiagramDHZGUBPPValue271 = vennDiagramDHZGUBPPValue269[0];
    for (let vennDiagramDHZGUBPPValue503 of vennDiagramDHZGUBPPValue269) {
      vennDiagramDHZGUBPPValue157[vennDiagramDHZGUBPPValue266].x =
        vennDiagramDHZGUBPPValue503.x;
      vennDiagramDHZGUBPPValue157[vennDiagramDHZGUBPPValue266].y =
        vennDiagramDHZGUBPPValue503.y;
      let vennDiagramDHZGUBPPValue532 = vennDiagramDHZGUBPPValue156(
        vennDiagramDHZGUBPPValue157,
        vennDiagramDHZGUBPPParam21,
      );
      vennDiagramDHZGUBPPValue532 < vennDiagramDHZGUBPPValue270 &&
        ((vennDiagramDHZGUBPPValue270 = vennDiagramDHZGUBPPValue532),
        (vennDiagramDHZGUBPPValue271 = vennDiagramDHZGUBPPValue503));
    }
    vennDiagramDHZGUBPPHelper58(
      vennDiagramDHZGUBPPValue271,
      vennDiagramDHZGUBPPValue266,
    );
  }
  return vennDiagramDHZGUBPPValue157;
}
function vennDiagramDHZGUBPPHelper27(
  vennDiagramDHZGUBPPParam98,
  vennDiagramDHZGUBPPParam99,
) {
  let vennDiagramDHZGUBPPValue349 = 0;
  for (let vennDiagramDHZGUBPPValue369 of vennDiagramDHZGUBPPParam99) {
    if (vennDiagramDHZGUBPPValue369.sets.length === 1) continue;
    let vennDiagramDHZGUBPPValue377;
    if (vennDiagramDHZGUBPPValue369.sets.length === 2) {
      let vennDiagramDHZGUBPPValue507 =
          vennDiagramDHZGUBPPParam98[vennDiagramDHZGUBPPValue369.sets[0]],
        vennDiagramDHZGUBPPValue508 =
          vennDiagramDHZGUBPPParam98[vennDiagramDHZGUBPPValue369.sets[1]];
      vennDiagramDHZGUBPPValue377 = vennDiagramDHZGUBPPHelper6(
        vennDiagramDHZGUBPPValue507.radius,
        vennDiagramDHZGUBPPValue508.radius,
        vennDiagramDHZGUBPPHelper5(
          vennDiagramDHZGUBPPValue507,
          vennDiagramDHZGUBPPValue508,
        ),
      );
    } else
      vennDiagramDHZGUBPPValue377 = vennDiagramDHZGUBPPHelper1(
        vennDiagramDHZGUBPPValue369.sets.map(
          (item) => vennDiagramDHZGUBPPParam98[item],
        ),
      );
    let vennDiagramDHZGUBPPValue378 =
      vennDiagramDHZGUBPPValue369.weight == null
        ? 1
        : vennDiagramDHZGUBPPValue369.weight;
    vennDiagramDHZGUBPPValue349 +=
      vennDiagramDHZGUBPPValue378 *
      (vennDiagramDHZGUBPPValue377 - vennDiagramDHZGUBPPValue369.size) *
      (vennDiagramDHZGUBPPValue377 - vennDiagramDHZGUBPPValue369.size);
  }
  return vennDiagramDHZGUBPPValue349;
}
function vennDiagramDHZGUBPPHelper28(
  vennDiagramDHZGUBPPParam96,
  vennDiagramDHZGUBPPParam97,
) {
  let vennDiagramDHZGUBPPValue348 = 0;
  for (let vennDiagramDHZGUBPPValue364 of vennDiagramDHZGUBPPParam97) {
    if (vennDiagramDHZGUBPPValue364.sets.length === 1) continue;
    let vennDiagramDHZGUBPPValue370;
    if (vennDiagramDHZGUBPPValue364.sets.length === 2) {
      let vennDiagramDHZGUBPPValue509 =
          vennDiagramDHZGUBPPParam96[vennDiagramDHZGUBPPValue364.sets[0]],
        vennDiagramDHZGUBPPValue510 =
          vennDiagramDHZGUBPPParam96[vennDiagramDHZGUBPPValue364.sets[1]];
      vennDiagramDHZGUBPPValue370 = vennDiagramDHZGUBPPHelper6(
        vennDiagramDHZGUBPPValue509.radius,
        vennDiagramDHZGUBPPValue510.radius,
        vennDiagramDHZGUBPPHelper5(
          vennDiagramDHZGUBPPValue509,
          vennDiagramDHZGUBPPValue510,
        ),
      );
    } else
      vennDiagramDHZGUBPPValue370 = vennDiagramDHZGUBPPHelper1(
        vennDiagramDHZGUBPPValue364.sets.map(
          (item) => vennDiagramDHZGUBPPParam96[item],
        ),
      );
    let vennDiagramDHZGUBPPValue371 =
        vennDiagramDHZGUBPPValue364.weight == null
          ? 1
          : vennDiagramDHZGUBPPValue364.weight,
      vennDiagramDHZGUBPPValue372 = Math.log(
        (vennDiagramDHZGUBPPValue370 + 1) /
          (vennDiagramDHZGUBPPValue364.size + 1),
      );
    vennDiagramDHZGUBPPValue348 +=
      vennDiagramDHZGUBPPValue371 *
      vennDiagramDHZGUBPPValue372 *
      vennDiagramDHZGUBPPValue372;
  }
  return vennDiagramDHZGUBPPValue348;
}
function vennDiagramDHZGUBPPHelper29(
  vennDiagramDHZGUBPPParam53,
  vennDiagramDHZGUBPPParam54,
  vennDiagramDHZGUBPPParam55,
) {
  if (
    (vennDiagramDHZGUBPPParam55 == null
      ? vennDiagramDHZGUBPPParam53.sort(
          (vennDiagramDHZGUBPPParam221, vennDiagramDHZGUBPPParam222) =>
            vennDiagramDHZGUBPPParam222.radius -
            vennDiagramDHZGUBPPParam221.radius,
        )
      : vennDiagramDHZGUBPPParam53.sort(vennDiagramDHZGUBPPParam55),
    vennDiagramDHZGUBPPParam53.length > 0)
  ) {
    let vennDiagramDHZGUBPPValue530 = vennDiagramDHZGUBPPParam53[0].x,
      vennDiagramDHZGUBPPValue531 = vennDiagramDHZGUBPPParam53[0].y;
    for (let vennDiagramDHZGUBPPValue563 of vennDiagramDHZGUBPPParam53) {
      vennDiagramDHZGUBPPValue563.x -= vennDiagramDHZGUBPPValue530;
      vennDiagramDHZGUBPPValue563.y -= vennDiagramDHZGUBPPValue531;
    }
  }
  if (
    (vennDiagramDHZGUBPPParam53.length === 2 &&
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPParam53[0],
        vennDiagramDHZGUBPPParam53[1],
      ) <
        Math.abs(
          vennDiagramDHZGUBPPParam53[1].radius -
            vennDiagramDHZGUBPPParam53[0].radius,
        ) &&
      ((vennDiagramDHZGUBPPParam53[1].x =
        vennDiagramDHZGUBPPParam53[0].x +
        vennDiagramDHZGUBPPParam53[0].radius -
        vennDiagramDHZGUBPPParam53[1].radius -
        1e-10),
      (vennDiagramDHZGUBPPParam53[1].y = vennDiagramDHZGUBPPParam53[0].y)),
    vennDiagramDHZGUBPPParam53.length > 1)
  ) {
    let vennDiagramDHZGUBPPValue431 =
        Math.atan2(
          vennDiagramDHZGUBPPParam53[1].x,
          vennDiagramDHZGUBPPParam53[1].y,
        ) - vennDiagramDHZGUBPPParam54,
      vennDiagramDHZGUBPPValue432 = Math.cos(vennDiagramDHZGUBPPValue431),
      vennDiagramDHZGUBPPValue433 = Math.sin(vennDiagramDHZGUBPPValue431);
    for (let vennDiagramDHZGUBPPValue524 of vennDiagramDHZGUBPPParam53) {
      let vennDiagramDHZGUBPPValue546 = vennDiagramDHZGUBPPValue524.x,
        vennDiagramDHZGUBPPValue547 = vennDiagramDHZGUBPPValue524.y;
      vennDiagramDHZGUBPPValue524.x =
        vennDiagramDHZGUBPPValue432 * vennDiagramDHZGUBPPValue546 -
        vennDiagramDHZGUBPPValue433 * vennDiagramDHZGUBPPValue547;
      vennDiagramDHZGUBPPValue524.y =
        vennDiagramDHZGUBPPValue433 * vennDiagramDHZGUBPPValue546 +
        vennDiagramDHZGUBPPValue432 * vennDiagramDHZGUBPPValue547;
    }
  }
  if (vennDiagramDHZGUBPPParam53.length > 2) {
    let vennDiagramDHZGUBPPValue388 =
      Math.atan2(
        vennDiagramDHZGUBPPParam53[2].x,
        vennDiagramDHZGUBPPParam53[2].y,
      ) - vennDiagramDHZGUBPPParam54;
    for (; vennDiagramDHZGUBPPValue388 < 0; )
      vennDiagramDHZGUBPPValue388 += 2 * Math.PI;
    for (; vennDiagramDHZGUBPPValue388 > 2 * Math.PI; )
      vennDiagramDHZGUBPPValue388 -= 2 * Math.PI;
    if (vennDiagramDHZGUBPPValue388 > Math.PI) {
      let vennDiagramDHZGUBPPValue459 =
        vennDiagramDHZGUBPPParam53[1].y /
        (1e-10 + vennDiagramDHZGUBPPParam53[1].x);
      for (let vennDiagramDHZGUBPPValue498 of vennDiagramDHZGUBPPParam53) {
        var vennDiagramDHZGUBPPValue263 =
          (vennDiagramDHZGUBPPValue498.x +
            vennDiagramDHZGUBPPValue459 * vennDiagramDHZGUBPPValue498.y) /
          (1 + vennDiagramDHZGUBPPValue459 * vennDiagramDHZGUBPPValue459);
        vennDiagramDHZGUBPPValue498.x =
          2 * vennDiagramDHZGUBPPValue263 - vennDiagramDHZGUBPPValue498.x;
        vennDiagramDHZGUBPPValue498.y =
          2 * vennDiagramDHZGUBPPValue263 * vennDiagramDHZGUBPPValue459 -
          vennDiagramDHZGUBPPValue498.y;
      }
    }
  }
}
function vennDiagramDHZGUBPPHelper30(vennDiagramDHZGUBPPParam66) {
  vennDiagramDHZGUBPPParam66.forEach((item) => {
    item.parent = item;
  });
  function vennDiagramDHZGUBPPHelper65(vennDiagramDHZGUBPPParam169) {
    return (
      vennDiagramDHZGUBPPParam169.parent !== vennDiagramDHZGUBPPParam169 &&
        (vennDiagramDHZGUBPPParam169.parent = vennDiagramDHZGUBPPHelper65(
          vennDiagramDHZGUBPPParam169.parent,
        )),
      vennDiagramDHZGUBPPParam169.parent
    );
  }
  function vennDiagramDHZGUBPPHelper66(
    vennDiagramDHZGUBPPParam205,
    vennDiagramDHZGUBPPParam206,
  ) {
    let vennDiagramDHZGUBPPValue548 = vennDiagramDHZGUBPPHelper65(
      vennDiagramDHZGUBPPParam205,
    );
    vennDiagramDHZGUBPPValue548.parent = vennDiagramDHZGUBPPHelper65(
      vennDiagramDHZGUBPPParam206,
    );
  }
  for (
    let vennDiagramDHZGUBPPValue427 = 0;
    vennDiagramDHZGUBPPValue427 < vennDiagramDHZGUBPPParam66.length;
    ++vennDiagramDHZGUBPPValue427
  )
    for (
      let vennDiagramDHZGUBPPValue463 = vennDiagramDHZGUBPPValue427 + 1;
      vennDiagramDHZGUBPPValue463 < vennDiagramDHZGUBPPParam66.length;
      ++vennDiagramDHZGUBPPValue463
    ) {
      let vennDiagramDHZGUBPPValue504 =
        vennDiagramDHZGUBPPParam66[vennDiagramDHZGUBPPValue427].radius +
        vennDiagramDHZGUBPPParam66[vennDiagramDHZGUBPPValue463].radius;
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPParam66[vennDiagramDHZGUBPPValue427],
        vennDiagramDHZGUBPPParam66[vennDiagramDHZGUBPPValue463],
      ) +
        1e-10 <
        vennDiagramDHZGUBPPValue504 &&
        vennDiagramDHZGUBPPHelper66(
          vennDiagramDHZGUBPPParam66[vennDiagramDHZGUBPPValue463],
          vennDiagramDHZGUBPPParam66[vennDiagramDHZGUBPPValue427],
        );
    }
  let vennDiagramDHZGUBPPValue293 = new Map();
  for (
    let vennDiagramDHZGUBPPValue460 = 0;
    vennDiagramDHZGUBPPValue460 < vennDiagramDHZGUBPPParam66.length;
    ++vennDiagramDHZGUBPPValue460
  ) {
    let vennDiagramDHZGUBPPValue492 = vennDiagramDHZGUBPPHelper65(
      vennDiagramDHZGUBPPParam66[vennDiagramDHZGUBPPValue460],
    ).parent.setid;
    vennDiagramDHZGUBPPValue293.has(vennDiagramDHZGUBPPValue492) ||
      vennDiagramDHZGUBPPValue293.set(vennDiagramDHZGUBPPValue492, []);
    vennDiagramDHZGUBPPValue293
      .get(vennDiagramDHZGUBPPValue492)
      .push(vennDiagramDHZGUBPPParam66[vennDiagramDHZGUBPPValue460]);
  }
  return (
    vennDiagramDHZGUBPPParam66.forEach((item) => {
      delete item.parent;
    }),
    Array.from(vennDiagramDHZGUBPPValue293.values())
  );
}
function vennDiagramDHZGUBPPHelper31(vennDiagramDHZGUBPPParam114) {
  let vennDiagramDHZGUBPPValue402 = (vennDiagramDHZGUBPPParam129) => ({
    max: vennDiagramDHZGUBPPParam114.reduce(
      (accumulator, current) =>
        Math.max(
          accumulator,
          current[vennDiagramDHZGUBPPParam129] + current.radius,
        ),
      -1 / 0,
    ),
    min: vennDiagramDHZGUBPPParam114.reduce(
      (accumulator, current) =>
        Math.min(
          accumulator,
          current[vennDiagramDHZGUBPPParam129] - current.radius,
        ),
      1 / 0,
    ),
  });
  return {
    xRange: vennDiagramDHZGUBPPValue402("x"),
    yRange: vennDiagramDHZGUBPPValue402("y"),
  };
}
function vennDiagramDHZGUBPPHelper32(
  vennDiagramDHZGUBPPParam40,
  vennDiagramDHZGUBPPParam41,
  vennDiagramDHZGUBPPParam42,
) {
  vennDiagramDHZGUBPPParam41 ??= Math.PI / 2;
  let vennDiagramDHZGUBPPValue216 = vennDiagramDHZGUBPPHelper35(
      vennDiagramDHZGUBPPParam40,
    ).map((item) => Object.assign({}, item)),
    vennDiagramDHZGUBPPValue217 = vennDiagramDHZGUBPPHelper30(
      vennDiagramDHZGUBPPValue216,
    );
  for (let vennDiagramDHZGUBPPValue442 of vennDiagramDHZGUBPPValue217) {
    vennDiagramDHZGUBPPHelper29(
      vennDiagramDHZGUBPPValue442,
      vennDiagramDHZGUBPPParam41,
      vennDiagramDHZGUBPPParam42,
    );
    let vennDiagramDHZGUBPPValue462 = vennDiagramDHZGUBPPHelper31(
      vennDiagramDHZGUBPPValue442,
    );
    vennDiagramDHZGUBPPValue442.size =
      (vennDiagramDHZGUBPPValue462.xRange.max -
        vennDiagramDHZGUBPPValue462.xRange.min) *
      (vennDiagramDHZGUBPPValue462.yRange.max -
        vennDiagramDHZGUBPPValue462.yRange.min);
    vennDiagramDHZGUBPPValue442.bounds = vennDiagramDHZGUBPPValue462;
  }
  vennDiagramDHZGUBPPValue217.sort(
    (vennDiagramDHZGUBPPParam227, vennDiagramDHZGUBPPParam228) =>
      vennDiagramDHZGUBPPParam228.size - vennDiagramDHZGUBPPParam227.size,
  );
  vennDiagramDHZGUBPPValue216 = vennDiagramDHZGUBPPValue217[0];
  let vennDiagramDHZGUBPPValue218 = vennDiagramDHZGUBPPValue216.bounds,
    vennDiagramDHZGUBPPValue219 =
      (vennDiagramDHZGUBPPValue218.xRange.max -
        vennDiagramDHZGUBPPValue218.xRange.min) /
      50;
  function vennDiagramDHZGUBPPHelper62(
    vennDiagramDHZGUBPPParam75,
    vennDiagramDHZGUBPPParam76,
    vennDiagramDHZGUBPPParam77,
  ) {
    if (!vennDiagramDHZGUBPPParam75) return;
    let vennDiagramDHZGUBPPValue308 = vennDiagramDHZGUBPPParam75.bounds,
      vennDiagramDHZGUBPPValue309,
      vennDiagramDHZGUBPPValue310;
    if (vennDiagramDHZGUBPPParam76)
      vennDiagramDHZGUBPPValue309 =
        vennDiagramDHZGUBPPValue218.xRange.max -
        vennDiagramDHZGUBPPValue308.xRange.min +
        vennDiagramDHZGUBPPValue219;
    else {
      vennDiagramDHZGUBPPValue309 =
        vennDiagramDHZGUBPPValue218.xRange.max -
        vennDiagramDHZGUBPPValue308.xRange.max;
      let vennDiagramDHZGUBPPValue447 =
        (vennDiagramDHZGUBPPValue308.xRange.max -
          vennDiagramDHZGUBPPValue308.xRange.min) /
          2 -
        (vennDiagramDHZGUBPPValue218.xRange.max -
          vennDiagramDHZGUBPPValue218.xRange.min) /
          2;
      vennDiagramDHZGUBPPValue447 < 0 &&
        (vennDiagramDHZGUBPPValue309 += vennDiagramDHZGUBPPValue447);
    }
    if (vennDiagramDHZGUBPPParam77)
      vennDiagramDHZGUBPPValue310 =
        vennDiagramDHZGUBPPValue218.yRange.max -
        vennDiagramDHZGUBPPValue308.yRange.min +
        vennDiagramDHZGUBPPValue219;
    else {
      vennDiagramDHZGUBPPValue310 =
        vennDiagramDHZGUBPPValue218.yRange.max -
        vennDiagramDHZGUBPPValue308.yRange.max;
      let vennDiagramDHZGUBPPValue448 =
        (vennDiagramDHZGUBPPValue308.yRange.max -
          vennDiagramDHZGUBPPValue308.yRange.min) /
          2 -
        (vennDiagramDHZGUBPPValue218.yRange.max -
          vennDiagramDHZGUBPPValue218.yRange.min) /
          2;
      vennDiagramDHZGUBPPValue448 < 0 &&
        (vennDiagramDHZGUBPPValue310 += vennDiagramDHZGUBPPValue448);
    }
    for (let vennDiagramDHZGUBPPValue554 of vennDiagramDHZGUBPPParam75) {
      vennDiagramDHZGUBPPValue554.x += vennDiagramDHZGUBPPValue309;
      vennDiagramDHZGUBPPValue554.y += vennDiagramDHZGUBPPValue310;
      vennDiagramDHZGUBPPValue216.push(vennDiagramDHZGUBPPValue554);
    }
  }
  let vennDiagramDHZGUBPPValue220 = 1;
  for (; vennDiagramDHZGUBPPValue220 < vennDiagramDHZGUBPPValue217.length; ) {
    vennDiagramDHZGUBPPHelper62(
      vennDiagramDHZGUBPPValue217[vennDiagramDHZGUBPPValue220],
      true,
      false,
    );
    vennDiagramDHZGUBPPHelper62(
      vennDiagramDHZGUBPPValue217[vennDiagramDHZGUBPPValue220 + 1],
      false,
      true,
    );
    vennDiagramDHZGUBPPHelper62(
      vennDiagramDHZGUBPPValue217[vennDiagramDHZGUBPPValue220 + 2],
      true,
      true,
    );
    vennDiagramDHZGUBPPValue220 += 3;
    vennDiagramDHZGUBPPValue218 = vennDiagramDHZGUBPPHelper31(
      vennDiagramDHZGUBPPValue216,
    );
  }
  return vennDiagramDHZGUBPPHelper34(vennDiagramDHZGUBPPValue216);
}
function vennDiagramDHZGUBPPHelper33(
  vennDiagramDHZGUBPPParam67,
  vennDiagramDHZGUBPPParam68,
  vennDiagramDHZGUBPPParam69,
  vennDiagramDHZGUBPPParam70,
  vennDiagramDHZGUBPPParam71,
) {
  let vennDiagramDHZGUBPPValue294 = vennDiagramDHZGUBPPHelper35(
    vennDiagramDHZGUBPPParam67,
  );
  vennDiagramDHZGUBPPParam68 -= 2 * vennDiagramDHZGUBPPParam70;
  vennDiagramDHZGUBPPParam69 -= 2 * vennDiagramDHZGUBPPParam70;
  let { xRange, yRange } = vennDiagramDHZGUBPPHelper31(
    vennDiagramDHZGUBPPValue294,
  );
  if (xRange.max === xRange.min || yRange.max === yRange.min)
    return (
      console.log("not scaling solution: zero size detected"),
      vennDiagramDHZGUBPPParam67
    );
  let vennDiagramDHZGUBPPValue295, vennDiagramDHZGUBPPValue296;
  if (vennDiagramDHZGUBPPParam71) {
    let vennDiagramDHZGUBPPValue545 =
      Math.sqrt(vennDiagramDHZGUBPPParam71 / Math.PI) * 2;
    vennDiagramDHZGUBPPValue295 =
      vennDiagramDHZGUBPPParam68 / vennDiagramDHZGUBPPValue545;
    vennDiagramDHZGUBPPValue296 =
      vennDiagramDHZGUBPPParam69 / vennDiagramDHZGUBPPValue545;
  } else {
    vennDiagramDHZGUBPPValue295 =
      vennDiagramDHZGUBPPParam68 / (xRange.max - xRange.min);
    vennDiagramDHZGUBPPValue296 =
      vennDiagramDHZGUBPPParam69 / (yRange.max - yRange.min);
  }
  let vennDiagramDHZGUBPPValue297 = Math.min(
      vennDiagramDHZGUBPPValue296,
      vennDiagramDHZGUBPPValue295,
    ),
    vennDiagramDHZGUBPPValue298 =
      (vennDiagramDHZGUBPPParam68 -
        (xRange.max - xRange.min) * vennDiagramDHZGUBPPValue297) /
      2,
    vennDiagramDHZGUBPPValue299 =
      (vennDiagramDHZGUBPPParam69 -
        (yRange.max - yRange.min) * vennDiagramDHZGUBPPValue297) /
      2;
  return vennDiagramDHZGUBPPHelper34(
    vennDiagramDHZGUBPPValue294.map((item) => ({
      radius: vennDiagramDHZGUBPPValue297 * item.radius,
      x:
        vennDiagramDHZGUBPPParam70 +
        vennDiagramDHZGUBPPValue298 +
        (item.x - xRange.min) * vennDiagramDHZGUBPPValue297,
      y:
        vennDiagramDHZGUBPPParam70 +
        vennDiagramDHZGUBPPValue299 +
        (item.y - yRange.min) * vennDiagramDHZGUBPPValue297,
      setid: item.setid,
    })),
  );
}
function vennDiagramDHZGUBPPHelper34(vennDiagramDHZGUBPPParam175) {
  let vennDiagramDHZGUBPPValue516 = {};
  for (let vennDiagramDHZGUBPPValue564 of vennDiagramDHZGUBPPParam175)
    vennDiagramDHZGUBPPValue516[vennDiagramDHZGUBPPValue564.setid] =
      vennDiagramDHZGUBPPValue564;
  return vennDiagramDHZGUBPPValue516;
}
function vennDiagramDHZGUBPPHelper35(vennDiagramDHZGUBPPParam151) {
  return Object.keys(vennDiagramDHZGUBPPParam151).map((item) =>
    Object.assign(vennDiagramDHZGUBPPParam151[item], {
      setid: item,
    }),
  );
}
function vennDiagramDHZGUBPPHelper36(vennDiagramDHZGUBPPParam1 = {}) {
  let vennDiagramDHZGUBPPValue45 = false,
    vennDiagramDHZGUBPPValue46 = 600,
    vennDiagramDHZGUBPPValue47 = 350,
    vennDiagramDHZGUBPPValue48 = 15,
    vennDiagramDHZGUBPPValue49 = 1e3,
    vennDiagramDHZGUBPPValue50 = Math.PI / 2,
    vennDiagramDHZGUBPPValue51 = true,
    vennDiagramDHZGUBPPValue52 = null,
    vennDiagramDHZGUBPPValue53 = true,
    vennDiagramDHZGUBPPValue54 = true,
    vennDiagramDHZGUBPPValue55 = null,
    vennDiagramDHZGUBPPValue56 = null,
    vennDiagramDHZGUBPPValue57 = false,
    vennDiagramDHZGUBPPValue58 = null,
    vennDiagramDHZGUBPPValue59 =
      vennDiagramDHZGUBPPParam1 &&
      vennDiagramDHZGUBPPParam1.symmetricalTextCentre
        ? vennDiagramDHZGUBPPParam1.symmetricalTextCentre
        : false,
    vennDiagramDHZGUBPPValue60 = {},
    vennDiagramDHZGUBPPValue61 =
      vennDiagramDHZGUBPPParam1 && vennDiagramDHZGUBPPParam1.colourScheme
        ? vennDiagramDHZGUBPPParam1.colourScheme
        : vennDiagramDHZGUBPPParam1 && vennDiagramDHZGUBPPParam1.colorScheme
          ? vennDiagramDHZGUBPPParam1.colorScheme
          : [
              "#1f77b4",
              "#ff7f0e",
              "#2ca02c",
              "#d62728",
              "#9467bd",
              "#8c564b",
              "#e377c2",
              "#7f7f7f",
              "#bcbd22",
              "#17becf",
            ],
    vennDiagramDHZGUBPPValue62 = 0,
    vennDiagramDHZGUBPPValue63 = function (vennDiagramDHZGUBPPParam143) {
      if (vennDiagramDHZGUBPPParam143 in vennDiagramDHZGUBPPValue60)
        return vennDiagramDHZGUBPPValue60[vennDiagramDHZGUBPPParam143];
      var vennDiagramDHZGUBPPValue481 = (vennDiagramDHZGUBPPValue60[
        vennDiagramDHZGUBPPParam143
      ] = vennDiagramDHZGUBPPValue61[vennDiagramDHZGUBPPValue62]);
      return (
        (vennDiagramDHZGUBPPValue62 += 1),
        vennDiagramDHZGUBPPValue62 >= vennDiagramDHZGUBPPValue61.length &&
          (vennDiagramDHZGUBPPValue62 = 0),
        vennDiagramDHZGUBPPValue481
      );
    },
    vennDiagramDHZGUBPPValue64 = vennDiagramDHZGUBPPHelper19,
    vennDiagramDHZGUBPPValue65 = vennDiagramDHZGUBPPHelper27;
  function vennDiagramDHZGUBPPHelper50(vennDiagramDHZGUBPPParam13) {
    let vennDiagramDHZGUBPPValue90 = vennDiagramDHZGUBPPParam13.datum(),
      vennDiagramDHZGUBPPValue91 = new Set();
    vennDiagramDHZGUBPPValue90.forEach((item) => {
      item.size == 0 &&
        item.sets.length == 1 &&
        vennDiagramDHZGUBPPValue91.add(item.sets[0]);
    });
    vennDiagramDHZGUBPPValue90 = vennDiagramDHZGUBPPValue90.filter(
      (item) =>
        !item.sets.some((_item) => vennDiagramDHZGUBPPValue91.has(_item)),
    );
    let vennDiagramDHZGUBPPValue92 = {},
      vennDiagramDHZGUBPPValue93 = {};
    if (vennDiagramDHZGUBPPValue90.length > 0) {
      let vennDiagramDHZGUBPPValue478 = vennDiagramDHZGUBPPValue64(
        vennDiagramDHZGUBPPValue90,
        {
          lossFunction: vennDiagramDHZGUBPPValue65,
          distinct: vennDiagramDHZGUBPPValue57,
        },
      );
      vennDiagramDHZGUBPPValue51 &&
        (vennDiagramDHZGUBPPValue478 = vennDiagramDHZGUBPPHelper32(
          vennDiagramDHZGUBPPValue478,
          vennDiagramDHZGUBPPValue50,
          vennDiagramDHZGUBPPValue56,
        ));
      vennDiagramDHZGUBPPValue92 = vennDiagramDHZGUBPPHelper33(
        vennDiagramDHZGUBPPValue478,
        vennDiagramDHZGUBPPValue46,
        vennDiagramDHZGUBPPValue47,
        vennDiagramDHZGUBPPValue48,
        vennDiagramDHZGUBPPValue52,
      );
      vennDiagramDHZGUBPPValue93 = vennDiagramDHZGUBPPHelper40(
        vennDiagramDHZGUBPPValue92,
        vennDiagramDHZGUBPPValue90,
        vennDiagramDHZGUBPPValue59,
      );
    }
    let vennDiagramDHZGUBPPValue94 = {};
    vennDiagramDHZGUBPPValue90.forEach((item) => {
      item.label && (vennDiagramDHZGUBPPValue94[item.sets] = item.label);
    });
    function vennDiagramDHZGUBPPHelper51(vennDiagramDHZGUBPPParam142) {
      if (vennDiagramDHZGUBPPParam142.sets in vennDiagramDHZGUBPPValue94)
        return vennDiagramDHZGUBPPValue94[vennDiagramDHZGUBPPParam142.sets];
      if (vennDiagramDHZGUBPPParam142.sets.length == 1)
        return "" + vennDiagramDHZGUBPPParam142.sets[0];
    }
    vennDiagramDHZGUBPPParam13
      .selectAll("svg")
      .data([vennDiagramDHZGUBPPValue92])
      .enter()
      .append("svg");
    let vennDiagramDHZGUBPPValue95 = vennDiagramDHZGUBPPParam13.select("svg");
    vennDiagramDHZGUBPPValue45
      ? vennDiagramDHZGUBPPValue95.attr(
          "viewBox",
          `0 0 ${vennDiagramDHZGUBPPValue46} ${vennDiagramDHZGUBPPValue47}`,
        )
      : vennDiagramDHZGUBPPValue95
          .attr("width", vennDiagramDHZGUBPPValue46)
          .attr("height", vennDiagramDHZGUBPPValue47);
    let vennDiagramDHZGUBPPValue96 = {},
      vennDiagramDHZGUBPPValue97 = false;
    vennDiagramDHZGUBPPValue95
      .selectAll(".venn-area path")
      .each(function (vennDiagramDHZGUBPPParam137) {
        let vennDiagramDHZGUBPPValue466 = this.getAttribute("d");
        vennDiagramDHZGUBPPParam137.sets.length == 1 &&
          vennDiagramDHZGUBPPValue466 &&
          !vennDiagramDHZGUBPPValue57 &&
          ((vennDiagramDHZGUBPPValue97 = true),
          (vennDiagramDHZGUBPPValue96[vennDiagramDHZGUBPPParam137.sets[0]] =
            vennDiagramDHZGUBPPHelper41(vennDiagramDHZGUBPPValue466)));
      });
    function vennDiagramDHZGUBPPHelper52(vennDiagramDHZGUBPPParam106) {
      return (vennDiagramDHZGUBPPParam110) =>
        vennDiagramDHZGUBPPHelper44(
          vennDiagramDHZGUBPPParam106.sets.map((item) => {
            let vennDiagramDHZGUBPPValue405 = vennDiagramDHZGUBPPValue96[item],
              vennDiagramDHZGUBPPValue406 = vennDiagramDHZGUBPPValue92[item];
            return (
              (vennDiagramDHZGUBPPValue405 ||= {
                x: vennDiagramDHZGUBPPValue46 / 2,
                y: vennDiagramDHZGUBPPValue47 / 2,
                radius: 1,
              }),
              (vennDiagramDHZGUBPPValue406 ||= {
                x: vennDiagramDHZGUBPPValue46 / 2,
                y: vennDiagramDHZGUBPPValue47 / 2,
                radius: 1,
              }),
              {
                x:
                  vennDiagramDHZGUBPPValue405.x *
                    (1 - vennDiagramDHZGUBPPParam110) +
                  vennDiagramDHZGUBPPValue406.x * vennDiagramDHZGUBPPParam110,
                y:
                  vennDiagramDHZGUBPPValue405.y *
                    (1 - vennDiagramDHZGUBPPParam110) +
                  vennDiagramDHZGUBPPValue406.y * vennDiagramDHZGUBPPParam110,
                radius:
                  vennDiagramDHZGUBPPValue405.radius *
                    (1 - vennDiagramDHZGUBPPParam110) +
                  vennDiagramDHZGUBPPValue406.radius *
                    vennDiagramDHZGUBPPParam110,
              }
            );
          }),
          vennDiagramDHZGUBPPValue58,
        );
    }
    let vennDiagramDHZGUBPPValue98 = vennDiagramDHZGUBPPValue95
        .selectAll(".venn-area")
        .data(
          vennDiagramDHZGUBPPValue90,
          (vennDiagramDHZGUBPPParam242) => vennDiagramDHZGUBPPParam242.sets,
        ),
      vennDiagramDHZGUBPPValue99 = vennDiagramDHZGUBPPValue98
        .enter()
        .append("g")
        .attr(
          "class",
          (vennDiagramDHZGUBPPParam134) =>
            `venn-area venn-${vennDiagramDHZGUBPPParam134.sets.length == 1 ? "circle" : "intersection"}${vennDiagramDHZGUBPPParam134.colour || vennDiagramDHZGUBPPParam134.color ? " venn-coloured" : ""}`,
        )
        .attr("data-venn-sets", (vennDiagramDHZGUBPPParam230) =>
          vennDiagramDHZGUBPPParam230.sets.join("_"),
        ),
      vennDiagramDHZGUBPPValue100 = vennDiagramDHZGUBPPValue99.append("path"),
      vennDiagramDHZGUBPPValue101 = vennDiagramDHZGUBPPValue99
        .append("text")
        .attr("class", "label")
        .text((vennDiagramDHZGUBPPParam244) =>
          vennDiagramDHZGUBPPHelper51(vennDiagramDHZGUBPPParam244),
        )
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .attr("x", vennDiagramDHZGUBPPValue46 / 2)
        .attr("y", vennDiagramDHZGUBPPValue47 / 2);
    vennDiagramDHZGUBPPValue54 &&
      (vennDiagramDHZGUBPPValue100
        .style("fill-opacity", "0")
        .filter((item) => item.sets.length == 1)
        .style("fill", (vennDiagramDHZGUBPPParam185) =>
          vennDiagramDHZGUBPPParam185.colour
            ? vennDiagramDHZGUBPPParam185.colour
            : vennDiagramDHZGUBPPParam185.color
              ? vennDiagramDHZGUBPPParam185.color
              : vennDiagramDHZGUBPPValue63(vennDiagramDHZGUBPPParam185.sets),
        )
        .style("fill-opacity", ".25"),
      vennDiagramDHZGUBPPValue101.style(
        "fill",
        (vennDiagramDHZGUBPPParam144) =>
          vennDiagramDHZGUBPPParam144.colour ||
          vennDiagramDHZGUBPPParam144.color
            ? "#FFF"
            : vennDiagramDHZGUBPPParam1.textFill
              ? vennDiagramDHZGUBPPParam1.textFill
              : vennDiagramDHZGUBPPParam144.sets.length == 1
                ? vennDiagramDHZGUBPPValue63(vennDiagramDHZGUBPPParam144.sets)
                : "#444",
      ));
    function vennDiagramDHZGUBPPHelper53(vennDiagramDHZGUBPPParam141) {
      return typeof vennDiagramDHZGUBPPParam141.transition == "function"
        ? vennDiagramDHZGUBPPParam141
            .transition("venn")
            .duration(vennDiagramDHZGUBPPValue49)
        : vennDiagramDHZGUBPPParam141;
    }
    let vennDiagramDHZGUBPPValue102 = vennDiagramDHZGUBPPParam13;
    vennDiagramDHZGUBPPValue97 &&
    typeof vennDiagramDHZGUBPPValue102.transition == "function"
      ? ((vennDiagramDHZGUBPPValue102 = vennDiagramDHZGUBPPHelper53(
          vennDiagramDHZGUBPPParam13,
        )),
        vennDiagramDHZGUBPPValue102
          .selectAll("path")
          .attrTween("d", vennDiagramDHZGUBPPHelper52))
      : vennDiagramDHZGUBPPValue102
          .selectAll("path")
          .attr(
            "d",
            (vennDiagramDHZGUBPPParam217) =>
              vennDiagramDHZGUBPPHelper44(
                vennDiagramDHZGUBPPParam217.sets.map(
                  (item) => vennDiagramDHZGUBPPValue92[item],
                ),
              ),
            vennDiagramDHZGUBPPValue58,
          );
    let vennDiagramDHZGUBPPValue103 = vennDiagramDHZGUBPPValue102
      .selectAll("text")
      .filter((item) => item.sets in vennDiagramDHZGUBPPValue93)
      .text((vennDiagramDHZGUBPPParam245) =>
        vennDiagramDHZGUBPPHelper51(vennDiagramDHZGUBPPParam245),
      )
      .attr("x", (vennDiagramDHZGUBPPParam218) =>
        Math.floor(
          vennDiagramDHZGUBPPValue93[vennDiagramDHZGUBPPParam218.sets].x,
        ),
      )
      .attr("y", (vennDiagramDHZGUBPPParam219) =>
        Math.floor(
          vennDiagramDHZGUBPPValue93[vennDiagramDHZGUBPPParam219.sets].y,
        ),
      );
    vennDiagramDHZGUBPPValue53 &&
      (vennDiagramDHZGUBPPValue97
        ? "on" in vennDiagramDHZGUBPPValue103
          ? vennDiagramDHZGUBPPValue103.on(
              "end",
              vennDiagramDHZGUBPPHelper37(
                vennDiagramDHZGUBPPValue92,
                vennDiagramDHZGUBPPHelper51,
              ),
            )
          : vennDiagramDHZGUBPPValue103.each(
              "end",
              vennDiagramDHZGUBPPHelper37(
                vennDiagramDHZGUBPPValue92,
                vennDiagramDHZGUBPPHelper51,
              ),
            )
        : vennDiagramDHZGUBPPValue103.each(
            vennDiagramDHZGUBPPHelper37(
              vennDiagramDHZGUBPPValue92,
              vennDiagramDHZGUBPPHelper51,
            ),
          ));
    let vennDiagramDHZGUBPPValue104 = vennDiagramDHZGUBPPHelper53(
      vennDiagramDHZGUBPPValue98.exit(),
    ).remove();
    typeof vennDiagramDHZGUBPPValue98.transition == "function" &&
      vennDiagramDHZGUBPPValue104
        .selectAll("path")
        .attrTween("d", vennDiagramDHZGUBPPHelper52);
    let vennDiagramDHZGUBPPValue105 = vennDiagramDHZGUBPPValue104
      .selectAll("text")
      .attr("x", vennDiagramDHZGUBPPValue46 / 2)
      .attr("y", vennDiagramDHZGUBPPValue47 / 2);
    return (
      vennDiagramDHZGUBPPValue55 !== null &&
        (vennDiagramDHZGUBPPValue101.style("font-size", "0px"),
        vennDiagramDHZGUBPPValue103.style(
          "font-size",
          vennDiagramDHZGUBPPValue55,
        ),
        vennDiagramDHZGUBPPValue105.style("font-size", "0px")),
      {
        circles: vennDiagramDHZGUBPPValue92,
        textCentres: vennDiagramDHZGUBPPValue93,
        nodes: vennDiagramDHZGUBPPValue98,
        enter: vennDiagramDHZGUBPPValue99,
        update: vennDiagramDHZGUBPPValue102,
        exit: vennDiagramDHZGUBPPValue104,
      }
    );
  }
  return (
    (vennDiagramDHZGUBPPHelper50.wrap = function (vennDiagramDHZGUBPPParam186) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue53 = vennDiagramDHZGUBPPParam186),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue53;
    }),
    (vennDiagramDHZGUBPPHelper50.useViewBox = function () {
      return ((vennDiagramDHZGUBPPValue45 = true), vennDiagramDHZGUBPPHelper50);
    }),
    (vennDiagramDHZGUBPPHelper50.width = function (
      vennDiagramDHZGUBPPParam187,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue46 = vennDiagramDHZGUBPPParam187),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue46;
    }),
    (vennDiagramDHZGUBPPHelper50.height = function (
      vennDiagramDHZGUBPPParam188,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue47 = vennDiagramDHZGUBPPParam188),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue47;
    }),
    (vennDiagramDHZGUBPPHelper50.padding = function (
      vennDiagramDHZGUBPPParam189,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue48 = vennDiagramDHZGUBPPParam189),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue48;
    }),
    (vennDiagramDHZGUBPPHelper50.distinct = function (
      vennDiagramDHZGUBPPParam190,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue57 = vennDiagramDHZGUBPPParam190),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue57;
    }),
    (vennDiagramDHZGUBPPHelper50.colours = function (
      vennDiagramDHZGUBPPParam191,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue63 = vennDiagramDHZGUBPPParam191),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue63;
    }),
    (vennDiagramDHZGUBPPHelper50.colors = function (
      vennDiagramDHZGUBPPParam192,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue63 = vennDiagramDHZGUBPPParam192),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue63;
    }),
    (vennDiagramDHZGUBPPHelper50.fontSize = function (
      vennDiagramDHZGUBPPParam193,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue55 = vennDiagramDHZGUBPPParam193),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue55;
    }),
    (vennDiagramDHZGUBPPHelper50.round = function (
      vennDiagramDHZGUBPPParam194,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue58 = vennDiagramDHZGUBPPParam194),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue58;
    }),
    (vennDiagramDHZGUBPPHelper50.duration = function (
      vennDiagramDHZGUBPPParam195,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue49 = vennDiagramDHZGUBPPParam195),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue49;
    }),
    (vennDiagramDHZGUBPPHelper50.layoutFunction = function (
      vennDiagramDHZGUBPPParam196,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue64 = vennDiagramDHZGUBPPParam196),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue64;
    }),
    (vennDiagramDHZGUBPPHelper50.normalize = function (
      vennDiagramDHZGUBPPParam197,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue51 = vennDiagramDHZGUBPPParam197),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue51;
    }),
    (vennDiagramDHZGUBPPHelper50.scaleToFit = function (
      vennDiagramDHZGUBPPParam198,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue52 = vennDiagramDHZGUBPPParam198),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue52;
    }),
    (vennDiagramDHZGUBPPHelper50.styled = function (
      vennDiagramDHZGUBPPParam199,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue54 = vennDiagramDHZGUBPPParam199),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue54;
    }),
    (vennDiagramDHZGUBPPHelper50.orientation = function (
      vennDiagramDHZGUBPPParam200,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue50 = vennDiagramDHZGUBPPParam200),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue50;
    }),
    (vennDiagramDHZGUBPPHelper50.orientationOrder = function (
      vennDiagramDHZGUBPPParam201,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue56 = vennDiagramDHZGUBPPParam201),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue56;
    }),
    (vennDiagramDHZGUBPPHelper50.lossFunction = function (
      vennDiagramDHZGUBPPParam149,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPValue65 =
            vennDiagramDHZGUBPPParam149 === "default"
              ? vennDiagramDHZGUBPPHelper27
              : vennDiagramDHZGUBPPParam149 === "logRatio"
                ? vennDiagramDHZGUBPPHelper28
                : vennDiagramDHZGUBPPParam149),
          vennDiagramDHZGUBPPHelper50)
        : vennDiagramDHZGUBPPValue65;
    }),
    vennDiagramDHZGUBPPHelper50
  );
}
function vennDiagramDHZGUBPPHelper37(
  vennDiagramDHZGUBPPParam47,
  vennDiagramDHZGUBPPParam48,
) {
  return function (vennDiagramDHZGUBPPParam52) {
    let vennDiagramDHZGUBPPValue249 = this,
      vennDiagramDHZGUBPPValue250 =
        vennDiagramDHZGUBPPParam47[vennDiagramDHZGUBPPParam52.sets[0]].radius ||
        50,
      vennDiagramDHZGUBPPValue251 =
        vennDiagramDHZGUBPPParam48(vennDiagramDHZGUBPPParam52) || "",
      vennDiagramDHZGUBPPValue252 = vennDiagramDHZGUBPPValue251
        .split(/\s+/)
        .reverse(),
      vennDiagramDHZGUBPPValue253 =
        (vennDiagramDHZGUBPPValue251.length +
          vennDiagramDHZGUBPPValue252.length) /
        3,
      vennDiagramDHZGUBPPValue254 = vennDiagramDHZGUBPPValue252.pop(),
      vennDiagramDHZGUBPPValue255 = [vennDiagramDHZGUBPPValue254],
      vennDiagramDHZGUBPPValue256 = 0;
    vennDiagramDHZGUBPPValue249.textContent = null;
    let vennDiagramDHZGUBPPValue258 = [];
    function vennDiagramDHZGUBPPHelper63(vennDiagramDHZGUBPPParam123) {
      let vennDiagramDHZGUBPPValue426 =
        vennDiagramDHZGUBPPValue249.ownerDocument.createElementNS(
          vennDiagramDHZGUBPPValue249.namespaceURI,
          "tspan",
        );
      return (
        (vennDiagramDHZGUBPPValue426.textContent = vennDiagramDHZGUBPPParam123),
        vennDiagramDHZGUBPPValue258.push(vennDiagramDHZGUBPPValue426),
        vennDiagramDHZGUBPPValue249.append(vennDiagramDHZGUBPPValue426),
        vennDiagramDHZGUBPPValue426
      );
    }
    let vennDiagramDHZGUBPPValue259 = vennDiagramDHZGUBPPHelper63(
      vennDiagramDHZGUBPPValue254,
    );
    for (
      ;
      (vennDiagramDHZGUBPPValue254 = vennDiagramDHZGUBPPValue252.pop()),
        vennDiagramDHZGUBPPValue254;

    ) {
      vennDiagramDHZGUBPPValue255.push(vennDiagramDHZGUBPPValue254);
      let vennDiagramDHZGUBPPValue416 = vennDiagramDHZGUBPPValue255.join(" ");
      vennDiagramDHZGUBPPValue259.textContent = vennDiagramDHZGUBPPValue416;
      vennDiagramDHZGUBPPValue416.length > vennDiagramDHZGUBPPValue253 &&
        vennDiagramDHZGUBPPValue259.getComputedTextLength() >
          vennDiagramDHZGUBPPValue250 &&
        (vennDiagramDHZGUBPPValue255.pop(),
        (vennDiagramDHZGUBPPValue259.textContent =
          vennDiagramDHZGUBPPValue255.join(" ")),
        (vennDiagramDHZGUBPPValue255 = [vennDiagramDHZGUBPPValue254]),
        (vennDiagramDHZGUBPPValue259 = vennDiagramDHZGUBPPHelper63(
          vennDiagramDHZGUBPPValue254,
        )),
        vennDiagramDHZGUBPPValue256++);
    }
    let vennDiagramDHZGUBPPValue260 =
        0.35 - (vennDiagramDHZGUBPPValue256 * 1.1) / 2,
      vennDiagramDHZGUBPPValue261 =
        vennDiagramDHZGUBPPValue249.getAttribute("x"),
      vennDiagramDHZGUBPPValue262 =
        vennDiagramDHZGUBPPValue249.getAttribute("y");
    vennDiagramDHZGUBPPValue258.forEach((item, index) => {
      item.setAttribute("x", vennDiagramDHZGUBPPValue261);
      item.setAttribute("y", vennDiagramDHZGUBPPValue262);
      item.setAttribute("dy", `${vennDiagramDHZGUBPPValue260 + index * 1.1}em`);
    });
  };
}
function vennDiagramDHZGUBPPHelper38(
  vennDiagramDHZGUBPPParam107,
  vennDiagramDHZGUBPPParam108,
  vennDiagramDHZGUBPPParam109,
) {
  let vennDiagramDHZGUBPPValue390 =
    vennDiagramDHZGUBPPParam108[0].radius -
    vennDiagramDHZGUBPPHelper5(
      vennDiagramDHZGUBPPParam108[0],
      vennDiagramDHZGUBPPParam107,
    );
  for (
    let vennDiagramDHZGUBPPValue499 = 1;
    vennDiagramDHZGUBPPValue499 < vennDiagramDHZGUBPPParam108.length;
    ++vennDiagramDHZGUBPPValue499
  ) {
    let vennDiagramDHZGUBPPValue549 =
      vennDiagramDHZGUBPPParam108[vennDiagramDHZGUBPPValue499].radius -
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPParam108[vennDiagramDHZGUBPPValue499],
        vennDiagramDHZGUBPPParam107,
      );
    vennDiagramDHZGUBPPValue549 <= vennDiagramDHZGUBPPValue390 &&
      (vennDiagramDHZGUBPPValue390 = vennDiagramDHZGUBPPValue549);
  }
  for (
    let vennDiagramDHZGUBPPValue500 = 0;
    vennDiagramDHZGUBPPValue500 < vennDiagramDHZGUBPPParam109.length;
    ++vennDiagramDHZGUBPPValue500
  ) {
    let vennDiagramDHZGUBPPValue550 =
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPParam109[vennDiagramDHZGUBPPValue500],
        vennDiagramDHZGUBPPParam107,
      ) - vennDiagramDHZGUBPPParam109[vennDiagramDHZGUBPPValue500].radius;
    vennDiagramDHZGUBPPValue550 <= vennDiagramDHZGUBPPValue390 &&
      (vennDiagramDHZGUBPPValue390 = vennDiagramDHZGUBPPValue550);
  }
  return vennDiagramDHZGUBPPValue390;
}
function _e(
  vennDiagramDHZGUBPPParam43,
  vennDiagramDHZGUBPPParam44,
  vennDiagramDHZGUBPPParam45,
) {
  let vennDiagramDHZGUBPPValue221 = [];
  for (let vennDiagramDHZGUBPPValue401 of vennDiagramDHZGUBPPParam43) {
    vennDiagramDHZGUBPPValue221.push({
      x: vennDiagramDHZGUBPPValue401.x,
      y: vennDiagramDHZGUBPPValue401.y,
    });
    vennDiagramDHZGUBPPValue221.push({
      x: vennDiagramDHZGUBPPValue401.x + vennDiagramDHZGUBPPValue401.radius / 2,
      y: vennDiagramDHZGUBPPValue401.y,
    });
    vennDiagramDHZGUBPPValue221.push({
      x: vennDiagramDHZGUBPPValue401.x - vennDiagramDHZGUBPPValue401.radius / 2,
      y: vennDiagramDHZGUBPPValue401.y,
    });
    vennDiagramDHZGUBPPValue221.push({
      x: vennDiagramDHZGUBPPValue401.x,
      y: vennDiagramDHZGUBPPValue401.y + vennDiagramDHZGUBPPValue401.radius / 2,
    });
    vennDiagramDHZGUBPPValue221.push({
      x: vennDiagramDHZGUBPPValue401.x,
      y: vennDiagramDHZGUBPPValue401.y - vennDiagramDHZGUBPPValue401.radius / 2,
    });
  }
  let vennDiagramDHZGUBPPValue222 = vennDiagramDHZGUBPPValue221[0],
    vennDiagramDHZGUBPPValue223 = vennDiagramDHZGUBPPHelper38(
      vennDiagramDHZGUBPPValue221[0],
      vennDiagramDHZGUBPPParam43,
      vennDiagramDHZGUBPPParam44,
    );
  for (
    let vennDiagramDHZGUBPPValue511 = 1;
    vennDiagramDHZGUBPPValue511 < vennDiagramDHZGUBPPValue221.length;
    ++vennDiagramDHZGUBPPValue511
  ) {
    let vennDiagramDHZGUBPPValue555 = vennDiagramDHZGUBPPHelper38(
      vennDiagramDHZGUBPPValue221[vennDiagramDHZGUBPPValue511],
      vennDiagramDHZGUBPPParam43,
      vennDiagramDHZGUBPPParam44,
    );
    vennDiagramDHZGUBPPValue555 >= vennDiagramDHZGUBPPValue223 &&
      ((vennDiagramDHZGUBPPValue222 =
        vennDiagramDHZGUBPPValue221[vennDiagramDHZGUBPPValue511]),
      (vennDiagramDHZGUBPPValue223 = vennDiagramDHZGUBPPValue555));
  }
  let vennDiagramDHZGUBPPValue224 = vennDiagramDHZGUBPPHelper16(
      (vennDiagramDHZGUBPPParam216) =>
        -1 *
        vennDiagramDHZGUBPPHelper38(
          {
            x: vennDiagramDHZGUBPPParam216[0],
            y: vennDiagramDHZGUBPPParam216[1],
          },
          vennDiagramDHZGUBPPParam43,
          vennDiagramDHZGUBPPParam44,
        ),
      [vennDiagramDHZGUBPPValue222.x, vennDiagramDHZGUBPPValue222.y],
      {
        maxIterations: 500,
        minErrorDelta: 1e-10,
      },
    ).x,
    vennDiagramDHZGUBPPValue225 = {
      x: vennDiagramDHZGUBPPParam45 ? 0 : vennDiagramDHZGUBPPValue224[0],
      y: vennDiagramDHZGUBPPValue224[1],
    },
    vennDiagramDHZGUBPPValue226 = true;
  for (let vennDiagramDHZGUBPPValue538 of vennDiagramDHZGUBPPParam43)
    if (
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPValue225,
        vennDiagramDHZGUBPPValue538,
      ) > vennDiagramDHZGUBPPValue538.radius
    ) {
      vennDiagramDHZGUBPPValue226 = false;
      break;
    }
  for (let vennDiagramDHZGUBPPValue539 of vennDiagramDHZGUBPPParam44)
    if (
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPValue225,
        vennDiagramDHZGUBPPValue539,
      ) < vennDiagramDHZGUBPPValue539.radius
    ) {
      vennDiagramDHZGUBPPValue226 = false;
      break;
    }
  if (vennDiagramDHZGUBPPValue226) return vennDiagramDHZGUBPPValue225;
  if (vennDiagramDHZGUBPPParam43.length == 1)
    return {
      x: vennDiagramDHZGUBPPParam43[0].x,
      y: vennDiagramDHZGUBPPParam43[0].y,
    };
  let vennDiagramDHZGUBPPValue227 = {};
  return (
    vennDiagramDHZGUBPPHelper1(
      vennDiagramDHZGUBPPParam43,
      vennDiagramDHZGUBPPValue227,
    ),
    vennDiagramDHZGUBPPValue227.arcs.length === 0
      ? {
          x: 0,
          y: -1000,
          disjoint: true,
        }
      : vennDiagramDHZGUBPPValue227.arcs.length == 1
        ? {
            x: vennDiagramDHZGUBPPValue227.arcs[0].circle.x,
            y: vennDiagramDHZGUBPPValue227.arcs[0].circle.y,
          }
        : vennDiagramDHZGUBPPParam44.length
          ? _e(vennDiagramDHZGUBPPParam43, [])
          : vennDiagramDHZGUBPPHelper8(
              vennDiagramDHZGUBPPValue227.arcs.map((item) => item.p1),
            )
  );
}
function vennDiagramDHZGUBPPHelper39(vennDiagramDHZGUBPPParam100) {
  let vennDiagramDHZGUBPPValue352 = {},
    vennDiagramDHZGUBPPValue353 = Object.keys(vennDiagramDHZGUBPPParam100);
  for (let vennDiagramDHZGUBPPValue566 of vennDiagramDHZGUBPPValue353)
    vennDiagramDHZGUBPPValue352[vennDiagramDHZGUBPPValue566] = [];
  for (
    let vennDiagramDHZGUBPPValue397 = 0;
    vennDiagramDHZGUBPPValue397 < vennDiagramDHZGUBPPValue353.length;
    vennDiagramDHZGUBPPValue397++
  ) {
    let vennDiagramDHZGUBPPValue403 =
        vennDiagramDHZGUBPPValue353[vennDiagramDHZGUBPPValue397],
      vennDiagramDHZGUBPPValue404 =
        vennDiagramDHZGUBPPParam100[vennDiagramDHZGUBPPValue403];
    for (
      let vennDiagramDHZGUBPPValue418 = vennDiagramDHZGUBPPValue397 + 1;
      vennDiagramDHZGUBPPValue418 < vennDiagramDHZGUBPPValue353.length;
      ++vennDiagramDHZGUBPPValue418
    ) {
      let vennDiagramDHZGUBPPValue444 =
          vennDiagramDHZGUBPPValue353[vennDiagramDHZGUBPPValue418],
        vennDiagramDHZGUBPPValue445 =
          vennDiagramDHZGUBPPParam100[vennDiagramDHZGUBPPValue444],
        vennDiagramDHZGUBPPValue446 = vennDiagramDHZGUBPPHelper5(
          vennDiagramDHZGUBPPValue404,
          vennDiagramDHZGUBPPValue445,
        );
      vennDiagramDHZGUBPPValue446 + vennDiagramDHZGUBPPValue445.radius <=
      vennDiagramDHZGUBPPValue404.radius + 1e-10
        ? vennDiagramDHZGUBPPValue352[vennDiagramDHZGUBPPValue444].push(
            vennDiagramDHZGUBPPValue403,
          )
        : vennDiagramDHZGUBPPValue446 + vennDiagramDHZGUBPPValue404.radius <=
            vennDiagramDHZGUBPPValue445.radius + 1e-10 &&
          vennDiagramDHZGUBPPValue352[vennDiagramDHZGUBPPValue403].push(
            vennDiagramDHZGUBPPValue444,
          );
    }
  }
  return vennDiagramDHZGUBPPValue352;
}
function vennDiagramDHZGUBPPHelper40(
  vennDiagramDHZGUBPPParam78,
  vennDiagramDHZGUBPPParam79,
  vennDiagramDHZGUBPPParam80,
) {
  let vennDiagramDHZGUBPPValue311 = {},
    vennDiagramDHZGUBPPValue312 = vennDiagramDHZGUBPPHelper39(
      vennDiagramDHZGUBPPParam78,
    );
  for (
    let vennDiagramDHZGUBPPValue319 = 0;
    vennDiagramDHZGUBPPValue319 < vennDiagramDHZGUBPPParam79.length;
    ++vennDiagramDHZGUBPPValue319
  ) {
    let vennDiagramDHZGUBPPValue331 =
        vennDiagramDHZGUBPPParam79[vennDiagramDHZGUBPPValue319].sets,
      vennDiagramDHZGUBPPValue332 = {},
      vennDiagramDHZGUBPPValue333 = {};
    for (
      let vennDiagramDHZGUBPPValue467 = 0;
      vennDiagramDHZGUBPPValue467 < vennDiagramDHZGUBPPValue331.length;
      ++vennDiagramDHZGUBPPValue467
    ) {
      vennDiagramDHZGUBPPValue332[
        vennDiagramDHZGUBPPValue331[vennDiagramDHZGUBPPValue467]
      ] = true;
      let vennDiagramDHZGUBPPValue512 =
        vennDiagramDHZGUBPPValue312[
          vennDiagramDHZGUBPPValue331[vennDiagramDHZGUBPPValue467]
        ];
      for (
        let vennDiagramDHZGUBPPValue556 = 0;
        vennDiagramDHZGUBPPValue556 < vennDiagramDHZGUBPPValue512.length;
        ++vennDiagramDHZGUBPPValue556
      )
        vennDiagramDHZGUBPPValue333[
          vennDiagramDHZGUBPPValue512[vennDiagramDHZGUBPPValue556]
        ] = true;
    }
    let vennDiagramDHZGUBPPValue334 = [],
      vennDiagramDHZGUBPPValue335 = [];
    for (let vennDiagramDHZGUBPPValue525 in vennDiagramDHZGUBPPParam78)
      vennDiagramDHZGUBPPValue525 in vennDiagramDHZGUBPPValue332
        ? vennDiagramDHZGUBPPValue334.push(
            vennDiagramDHZGUBPPParam78[vennDiagramDHZGUBPPValue525],
          )
        : vennDiagramDHZGUBPPValue525 in vennDiagramDHZGUBPPValue333 ||
          vennDiagramDHZGUBPPValue335.push(
            vennDiagramDHZGUBPPParam78[vennDiagramDHZGUBPPValue525],
          );
    let vennDiagramDHZGUBPPValue336 = _e(
      vennDiagramDHZGUBPPValue334,
      vennDiagramDHZGUBPPValue335,
      vennDiagramDHZGUBPPParam80,
    );
    vennDiagramDHZGUBPPValue311[vennDiagramDHZGUBPPValue331] =
      vennDiagramDHZGUBPPValue336;
    vennDiagramDHZGUBPPValue336.disjoint &&
      vennDiagramDHZGUBPPParam79[vennDiagramDHZGUBPPValue319].size > 0 &&
      console.log(
        "WARNING: area " +
          vennDiagramDHZGUBPPValue331 +
          " not represented on screen",
      );
  }
  return vennDiagramDHZGUBPPValue311;
}
function be(
  vennDiagramDHZGUBPPParam117,
  vennDiagramDHZGUBPPParam118,
  vennDiagramDHZGUBPPParam119,
) {
  let vennDiagramDHZGUBPPValue415 = [];
  return (
    vennDiagramDHZGUBPPValue415.push(
      "\nM",
      vennDiagramDHZGUBPPParam117,
      vennDiagramDHZGUBPPParam118,
    ),
    vennDiagramDHZGUBPPValue415.push("\nm", -vennDiagramDHZGUBPPParam119, 0),
    vennDiagramDHZGUBPPValue415.push(
      "\na",
      vennDiagramDHZGUBPPParam119,
      vennDiagramDHZGUBPPParam119,
      0,
      1,
      0,
      vennDiagramDHZGUBPPParam119 * 2,
      0,
    ),
    vennDiagramDHZGUBPPValue415.push(
      "\na",
      vennDiagramDHZGUBPPParam119,
      vennDiagramDHZGUBPPParam119,
      0,
      1,
      0,
      -vennDiagramDHZGUBPPParam119 * 2,
      0,
    ),
    vennDiagramDHZGUBPPValue415.join(" ")
  );
}
function vennDiagramDHZGUBPPHelper41(vennDiagramDHZGUBPPParam122) {
  let vennDiagramDHZGUBPPValue422 = vennDiagramDHZGUBPPParam122.split(" ");
  return {
    x: Number.parseFloat(vennDiagramDHZGUBPPValue422[1]),
    y: Number.parseFloat(vennDiagramDHZGUBPPValue422[2]),
    radius: -Number.parseFloat(vennDiagramDHZGUBPPValue422[4]),
  };
}
function vennDiagramDHZGUBPPHelper42(vennDiagramDHZGUBPPParam161) {
  if (vennDiagramDHZGUBPPParam161.length === 0) return [];
  let vennDiagramDHZGUBPPValue493 = {};
  return (
    vennDiagramDHZGUBPPHelper1(
      vennDiagramDHZGUBPPParam161,
      vennDiagramDHZGUBPPValue493,
    ),
    vennDiagramDHZGUBPPValue493.arcs
  );
}
function vennDiagramDHZGUBPPHelper43(
  vennDiagramDHZGUBPPParam88,
  vennDiagramDHZGUBPPParam89,
) {
  if (vennDiagramDHZGUBPPParam88.length === 0) return "M 0 0";
  let vennDiagramDHZGUBPPValue316 = 10 ** (vennDiagramDHZGUBPPParam89 || 0),
    vennDiagramDHZGUBPPValue317 =
      vennDiagramDHZGUBPPParam89 == null
        ? (vennDiagramDHZGUBPPParam246) => vennDiagramDHZGUBPPParam246
        : (vennDiagramDHZGUBPPParam229) =>
            Math.round(
              vennDiagramDHZGUBPPParam229 * vennDiagramDHZGUBPPValue316,
            ) / vennDiagramDHZGUBPPValue316;
  if (vennDiagramDHZGUBPPParam88.length == 1) {
    let vennDiagramDHZGUBPPValue526 = vennDiagramDHZGUBPPParam88[0].circle;
    return be(
      vennDiagramDHZGUBPPValue317(vennDiagramDHZGUBPPValue526.x),
      vennDiagramDHZGUBPPValue317(vennDiagramDHZGUBPPValue526.y),
      vennDiagramDHZGUBPPValue317(vennDiagramDHZGUBPPValue526.radius),
    );
  }
  let vennDiagramDHZGUBPPValue318 = [
    "\nM",
    vennDiagramDHZGUBPPValue317(vennDiagramDHZGUBPPParam88[0].p2.x),
    vennDiagramDHZGUBPPValue317(vennDiagramDHZGUBPPParam88[0].p2.y),
  ];
  for (let vennDiagramDHZGUBPPValue453 of vennDiagramDHZGUBPPParam88) {
    let vennDiagramDHZGUBPPValue473 = vennDiagramDHZGUBPPValue317(
      vennDiagramDHZGUBPPValue453.circle.radius,
    );
    vennDiagramDHZGUBPPValue318.push(
      "\nA",
      vennDiagramDHZGUBPPValue473,
      vennDiagramDHZGUBPPValue473,
      0,
      vennDiagramDHZGUBPPValue453.large ? 1 : 0,
      vennDiagramDHZGUBPPValue453.sweep ? 1 : 0,
      vennDiagramDHZGUBPPValue317(vennDiagramDHZGUBPPValue453.p1.x),
      vennDiagramDHZGUBPPValue317(vennDiagramDHZGUBPPValue453.p1.y),
    );
  }
  return vennDiagramDHZGUBPPValue318.join(" ");
}
function vennDiagramDHZGUBPPHelper44(
  vennDiagramDHZGUBPPParam211,
  vennDiagramDHZGUBPPParam212,
) {
  return vennDiagramDHZGUBPPHelper43(
    vennDiagramDHZGUBPPHelper42(vennDiagramDHZGUBPPParam211),
    vennDiagramDHZGUBPPParam212,
  );
}
function vennDiagramDHZGUBPPHelper45(
  vennDiagramDHZGUBPPParam30,
  vennDiagramDHZGUBPPParam31 = {},
) {
  let {
      lossFunction,
      layoutFunction = vennDiagramDHZGUBPPHelper19,
      normalize = true,
      orientation = Math.PI / 2,
      orientationOrder,
      width = 600,
      height = 350,
      padding = 15,
      scaleToFit = false,
      symmetricalTextCentre = false,
      distinct,
      round = 2,
    } = vennDiagramDHZGUBPPParam31,
    vennDiagramDHZGUBPPValue199 = layoutFunction(vennDiagramDHZGUBPPParam30, {
      lossFunction:
        lossFunction === "default" || !lossFunction
          ? vennDiagramDHZGUBPPHelper27
          : lossFunction === "logRatio"
            ? vennDiagramDHZGUBPPHelper28
            : lossFunction,
      distinct,
    });
  normalize &&
    (vennDiagramDHZGUBPPValue199 = vennDiagramDHZGUBPPHelper32(
      vennDiagramDHZGUBPPValue199,
      orientation,
      orientationOrder,
    ));
  let vennDiagramDHZGUBPPValue200 = vennDiagramDHZGUBPPHelper33(
      vennDiagramDHZGUBPPValue199,
      width,
      height,
      padding,
      scaleToFit,
    ),
    vennDiagramDHZGUBPPValue201 = vennDiagramDHZGUBPPHelper40(
      vennDiagramDHZGUBPPValue200,
      vennDiagramDHZGUBPPParam30,
      symmetricalTextCentre,
    ),
    vennDiagramDHZGUBPPValue202 = new Map(
      Object.keys(vennDiagramDHZGUBPPValue200).map((item) => [
        item,
        {
          set: item,
          x: vennDiagramDHZGUBPPValue200[item].x,
          y: vennDiagramDHZGUBPPValue200[item].y,
          radius: vennDiagramDHZGUBPPValue200[item].radius,
        },
      ]),
    ),
    vennDiagramDHZGUBPPValue203 = vennDiagramDHZGUBPPParam30.map((item) => {
      let vennDiagramDHZGUBPPValue449 = item.sets.map((_item) =>
          vennDiagramDHZGUBPPValue202.get(_item),
        ),
        vennDiagramDHZGUBPPValue450 = vennDiagramDHZGUBPPHelper42(
          vennDiagramDHZGUBPPValue449,
        );
      return {
        circles: vennDiagramDHZGUBPPValue449,
        arcs: vennDiagramDHZGUBPPValue450,
        path: vennDiagramDHZGUBPPHelper43(vennDiagramDHZGUBPPValue450, round),
        area: item,
        has: new Set(item.sets),
      };
    });
  function vennDiagramDHZGUBPPHelper60(vennDiagramDHZGUBPPParam128) {
    let vennDiagramDHZGUBPPValue443 = "";
    for (let vennDiagramDHZGUBPPValue483 of vennDiagramDHZGUBPPValue203)
      vennDiagramDHZGUBPPValue483.has.size >
        vennDiagramDHZGUBPPParam128.length &&
        vennDiagramDHZGUBPPParam128.every((item) =>
          vennDiagramDHZGUBPPValue483.has.has(item),
        ) &&
        (vennDiagramDHZGUBPPValue443 += " " + vennDiagramDHZGUBPPValue483.path);
    return vennDiagramDHZGUBPPValue443;
  }
  return vennDiagramDHZGUBPPValue203.map(({ circles, arcs, path, area }) => ({
    data: area,
    text: vennDiagramDHZGUBPPValue201[area.sets],
    circles,
    arcs,
    path,
    distinctPath: path + vennDiagramDHZGUBPPHelper60(area.sets),
  }));
}
var vennDiagramDHZGUBPPValue4 = (function () {
  var vennDiagramDHZGUBPPValue29 = chunkAGHRB4JFN(function (
      vennDiagramDHZGUBPPParam171,
      vennDiagramDHZGUBPPParam172,
      vennDiagramDHZGUBPPParam173,
      vennDiagramDHZGUBPPParam174,
    ) {
      for (
        vennDiagramDHZGUBPPParam173 ||= {},
          vennDiagramDHZGUBPPParam174 = vennDiagramDHZGUBPPParam171.length;
        vennDiagramDHZGUBPPParam174--;
        vennDiagramDHZGUBPPParam173[
          vennDiagramDHZGUBPPParam171[vennDiagramDHZGUBPPParam174]
        ] = vennDiagramDHZGUBPPParam172
      );
      return vennDiagramDHZGUBPPParam173;
    }, "o"),
    vennDiagramDHZGUBPPValue30 = [5, 8],
    vennDiagramDHZGUBPPValue31 = [7, 8, 11, 12, 17, 19, 22, 24],
    vennDiagramDHZGUBPPValue32 = [1, 17],
    vennDiagramDHZGUBPPValue33 = [1, 18],
    vennDiagramDHZGUBPPValue34 = [
      7, 8, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 24, 27,
    ],
    vennDiagramDHZGUBPPValue35 = [1, 31],
    vennDiagramDHZGUBPPValue36 = [1, 39],
    vennDiagramDHZGUBPPValue37 = [7, 8, 11, 12, 17, 19, 22, 24, 27],
    vennDiagramDHZGUBPPValue38 = [1, 57],
    vennDiagramDHZGUBPPValue39 = [1, 56],
    vennDiagramDHZGUBPPValue40 = [1, 58],
    vennDiagramDHZGUBPPValue41 = [1, 59],
    vennDiagramDHZGUBPPValue42 = [1, 60],
    vennDiagramDHZGUBPPValue43 = [
      7, 8, 11, 12, 16, 17, 19, 20, 22, 24, 27, 31, 32, 33,
    ],
    vennDiagramDHZGUBPPValue44 = {
      trace: chunkAGHRB4JFN(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        optNewlines: 4,
        VENN: 5,
        document: 6,
        EOF: 7,
        NEWLINE: 8,
        line: 9,
        statement: 10,
        TITLE: 11,
        SET: 12,
        identifier: 13,
        BRACKET_LABEL: 14,
        COLON: 15,
        NUMERIC: 16,
        UNION: 17,
        identifierList: 18,
        TEXT: 19,
        IDENTIFIER: 20,
        STRING: 21,
        INDENT_TEXT: 22,
        indentedTextTail: 23,
        STYLE: 24,
        stylesOpt: 25,
        styleField: 26,
        COMMA: 27,
        styleValue: 28,
        valueTokens: 29,
        valueToken: 30,
        HEXCOLOR: 31,
        RGBCOLOR: 32,
        RGBACOLOR: 33,
        $accept: 0,
        $end: 1,
      },
      terminals_: {
        2: "error",
        5: "VENN",
        7: "EOF",
        8: "NEWLINE",
        11: "TITLE",
        12: "SET",
        14: "BRACKET_LABEL",
        15: "COLON",
        16: "NUMERIC",
        17: "UNION",
        19: "TEXT",
        20: "IDENTIFIER",
        21: "STRING",
        22: "INDENT_TEXT",
        24: "STYLE",
        27: "COMMA",
        31: "HEXCOLOR",
        32: "RGBCOLOR",
        33: "RGBACOLOR",
      },
      productions_: [
        0,
        [3, 4],
        [4, 0],
        [4, 2],
        [6, 0],
        [6, 2],
        [9, 1],
        [9, 1],
        [10, 1],
        [10, 2],
        [10, 3],
        [10, 4],
        [10, 5],
        [10, 2],
        [10, 3],
        [10, 4],
        [10, 5],
        [10, 3],
        [10, 3],
        [10, 3],
        [10, 4],
        [10, 4],
        [10, 2],
        [10, 3],
        [23, 1],
        [23, 1],
        [23, 1],
        [23, 2],
        [23, 2],
        [25, 1],
        [25, 3],
        [26, 3],
        [28, 1],
        [28, 1],
        [29, 1],
        [29, 2],
        [30, 1],
        [30, 1],
        [30, 1],
        [30, 1],
        [30, 1],
        [18, 1],
        [18, 3],
        [13, 1],
        [13, 1],
      ],
      performAction: chunkAGHRB4JFN(function (
        vennDiagramDHZGUBPPParam6,
        vennDiagramDHZGUBPPParam7,
        vennDiagramDHZGUBPPParam8,
        vennDiagramDHZGUBPPParam9,
        vennDiagramDHZGUBPPParam10,
        vennDiagramDHZGUBPPParam11,
        vennDiagramDHZGUBPPParam12,
      ) {
        var vennDiagramDHZGUBPPValue88 = vennDiagramDHZGUBPPParam11.length - 1;
        switch (vennDiagramDHZGUBPPParam10) {
          case 1:
            return vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1];
          case 2:
          case 3:
          case 4:
            this.$ = [];
            break;
          case 5:
            vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1].push(
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
            );
            this.$ = vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1];
            break;
          case 6:
            this.$ = [];
            break;
          case 7:
          case 22:
          case 32:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
            this.$ = vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88];
            break;
          case 8:
            vennDiagramDHZGUBPPParam9.setDiagramTitle(
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88].substr(6),
            );
            this.$ =
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88].substr(6);
            break;
          case 9:
            vennDiagramDHZGUBPPParam9.addSubsetData(
              [vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88]],
              undefined,
              undefined,
            );
            vennDiagramDHZGUBPPParam9.setIndentMode &&
              vennDiagramDHZGUBPPParam9.setIndentMode(true);
            break;
          case 10:
            vennDiagramDHZGUBPPParam9.addSubsetData(
              [vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1]],
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
              undefined,
            );
            vennDiagramDHZGUBPPParam9.setIndentMode &&
              vennDiagramDHZGUBPPParam9.setIndentMode(true);
            break;
          case 11:
            vennDiagramDHZGUBPPParam9.addSubsetData(
              [vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 2]],
              undefined,
              parseFloat(
                vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
              ),
            );
            vennDiagramDHZGUBPPParam9.setIndentMode &&
              vennDiagramDHZGUBPPParam9.setIndentMode(true);
            break;
          case 12:
            vennDiagramDHZGUBPPParam9.addSubsetData(
              [vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 3]],
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 2],
              parseFloat(
                vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
              ),
            );
            vennDiagramDHZGUBPPParam9.setIndentMode &&
              vennDiagramDHZGUBPPParam9.setIndentMode(true);
            break;
          case 13:
            if (
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88].length < 2
            )
              throw Error("union requires multiple identifiers");
            vennDiagramDHZGUBPPParam9.validateUnionIdentifiers &&
              vennDiagramDHZGUBPPParam9.validateUnionIdentifiers(
                vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
              );
            vennDiagramDHZGUBPPParam9.addSubsetData(
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
              undefined,
              undefined,
            );
            vennDiagramDHZGUBPPParam9.setIndentMode &&
              vennDiagramDHZGUBPPParam9.setIndentMode(true);
            break;
          case 14:
            if (
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1]
                .length < 2
            )
              throw Error("union requires multiple identifiers");
            vennDiagramDHZGUBPPParam9.validateUnionIdentifiers &&
              vennDiagramDHZGUBPPParam9.validateUnionIdentifiers(
                vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1],
              );
            vennDiagramDHZGUBPPParam9.addSubsetData(
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1],
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
              undefined,
            );
            vennDiagramDHZGUBPPParam9.setIndentMode &&
              vennDiagramDHZGUBPPParam9.setIndentMode(true);
            break;
          case 15:
            if (
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 2]
                .length < 2
            )
              throw Error("union requires multiple identifiers");
            vennDiagramDHZGUBPPParam9.validateUnionIdentifiers &&
              vennDiagramDHZGUBPPParam9.validateUnionIdentifiers(
                vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 2],
              );
            vennDiagramDHZGUBPPParam9.addSubsetData(
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 2],
              undefined,
              parseFloat(
                vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
              ),
            );
            vennDiagramDHZGUBPPParam9.setIndentMode &&
              vennDiagramDHZGUBPPParam9.setIndentMode(true);
            break;
          case 16:
            if (
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 3]
                .length < 2
            )
              throw Error("union requires multiple identifiers");
            vennDiagramDHZGUBPPParam9.validateUnionIdentifiers &&
              vennDiagramDHZGUBPPParam9.validateUnionIdentifiers(
                vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 3],
              );
            vennDiagramDHZGUBPPParam9.addSubsetData(
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 3],
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 2],
              parseFloat(
                vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
              ),
            );
            vennDiagramDHZGUBPPParam9.setIndentMode &&
              vennDiagramDHZGUBPPParam9.setIndentMode(true);
            break;
          case 17:
          case 18:
          case 19:
            vennDiagramDHZGUBPPParam9.addTextData(
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1],
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
              undefined,
            );
            break;
          case 20:
          case 21:
            vennDiagramDHZGUBPPParam9.addTextData(
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 2],
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1],
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
            );
            break;
          case 23:
            vennDiagramDHZGUBPPParam9.addStyleData(
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1],
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
            );
            break;
          case 24:
          case 25:
          case 26:
            var vennDiagramDHZGUBPPValue89 =
              vennDiagramDHZGUBPPParam9.getCurrentSets();
            if (!vennDiagramDHZGUBPPValue89) throw Error("text requires set");
            vennDiagramDHZGUBPPParam9.addTextData(
              vennDiagramDHZGUBPPValue89,
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
              undefined,
            );
            break;
          case 27:
          case 28:
            var vennDiagramDHZGUBPPValue89 =
              vennDiagramDHZGUBPPParam9.getCurrentSets();
            if (!vennDiagramDHZGUBPPValue89) throw Error("text requires set");
            vennDiagramDHZGUBPPParam9.addTextData(
              vennDiagramDHZGUBPPValue89,
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1],
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
            );
            break;
          case 29:
          case 41:
            this.$ = [vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88]];
            break;
          case 30:
          case 42:
            this.$ = [
              ...vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 2],
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
            ];
            break;
          case 31:
            this.$ = [
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 2],
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
            ];
            break;
          case 33:
            this.$ =
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88].join(" ");
            break;
          case 34:
            this.$ = [vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88]];
            break;
          case 35:
            vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1].push(
              vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88],
            );
            this.$ = vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88 - 1];
            break;
          case 43:
          case 44:
            this.$ = vennDiagramDHZGUBPPParam11[vennDiagramDHZGUBPPValue88];
            break;
        }
      }, "anonymous"),
      table: [
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue30, [2, 2], {
          3: 1,
          4: 2,
        }),
        {
          1: [3],
        },
        {
          5: [1, 3],
          8: [1, 4],
        },
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 4], {
          6: 5,
        }),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue30, [2, 3]),
        {
          7: [1, 6],
          8: [1, 8],
          9: 7,
          10: 9,
          11: [1, 10],
          12: [1, 11],
          17: [1, 12],
          19: [1, 13],
          22: [1, 14],
          24: [1, 15],
        },
        {
          1: [2, 1],
        },
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 5]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 6]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 7]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 8]),
        {
          13: 16,
          20: vennDiagramDHZGUBPPValue32,
          21: vennDiagramDHZGUBPPValue33,
        },
        {
          13: 20,
          18: 19,
          20: vennDiagramDHZGUBPPValue32,
          21: vennDiagramDHZGUBPPValue33,
        },
        {
          13: 20,
          18: 21,
          20: vennDiagramDHZGUBPPValue32,
          21: vennDiagramDHZGUBPPValue33,
        },
        {
          16: [1, 25],
          20: [1, 23],
          21: [1, 24],
          23: 22,
        },
        {
          13: 20,
          18: 26,
          20: vennDiagramDHZGUBPPValue32,
          21: vennDiagramDHZGUBPPValue33,
        },
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 9], {
          14: [1, 27],
          15: [1, 28],
        }),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue34, [2, 43]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue34, [2, 44]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 13], {
          14: [1, 29],
          15: [1, 30],
          27: vennDiagramDHZGUBPPValue35,
        }),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue34, [2, 41]),
        {
          16: [1, 34],
          20: [1, 32],
          21: [1, 33],
          27: vennDiagramDHZGUBPPValue35,
        },
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 22]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 24], {
          14: [1, 35],
        }),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 25], {
          14: [1, 36],
        }),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 26]),
        {
          20: vennDiagramDHZGUBPPValue36,
          25: 37,
          26: 38,
          27: vennDiagramDHZGUBPPValue35,
        },
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 10], {
          15: [1, 40],
        }),
        {
          16: [1, 41],
        },
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 14], {
          15: [1, 42],
        }),
        {
          16: [1, 43],
        },
        {
          13: 44,
          20: vennDiagramDHZGUBPPValue32,
          21: vennDiagramDHZGUBPPValue33,
        },
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 17], {
          14: [1, 45],
        }),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 18], {
          14: [1, 46],
        }),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 19]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 27]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 28]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 23], {
          27: [1, 47],
        }),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue37, [2, 29]),
        {
          15: [1, 48],
        },
        {
          16: [1, 49],
        },
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 11]),
        {
          16: [1, 50],
        },
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 15]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue34, [2, 42]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 20]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 21]),
        {
          20: vennDiagramDHZGUBPPValue36,
          26: 51,
        },
        {
          16: vennDiagramDHZGUBPPValue38,
          20: vennDiagramDHZGUBPPValue39,
          21: [1, 53],
          28: 52,
          29: 54,
          30: 55,
          31: vennDiagramDHZGUBPPValue40,
          32: vennDiagramDHZGUBPPValue41,
          33: vennDiagramDHZGUBPPValue42,
        },
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 12]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue31, [2, 16]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue37, [2, 30]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue37, [2, 31]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue37, [2, 32]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue37, [2, 33], {
          30: 61,
          16: vennDiagramDHZGUBPPValue38,
          20: vennDiagramDHZGUBPPValue39,
          31: vennDiagramDHZGUBPPValue40,
          32: vennDiagramDHZGUBPPValue41,
          33: vennDiagramDHZGUBPPValue42,
        }),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue43, [2, 34]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue43, [2, 36]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue43, [2, 37]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue43, [2, 38]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue43, [2, 39]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue43, [2, 40]),
        vennDiagramDHZGUBPPValue29(vennDiagramDHZGUBPPValue43, [2, 35]),
      ],
      defaultActions: {
        6: [2, 1],
      },
      parseError: chunkAGHRB4JFN(function (
        vennDiagramDHZGUBPPParam145,
        vennDiagramDHZGUBPPParam146,
      ) {
        if (vennDiagramDHZGUBPPParam146.recoverable)
          this.trace(vennDiagramDHZGUBPPParam145);
        else {
          var vennDiagramDHZGUBPPValue482 = Error(vennDiagramDHZGUBPPParam145);
          throw (
            (vennDiagramDHZGUBPPValue482.hash = vennDiagramDHZGUBPPParam146),
            vennDiagramDHZGUBPPValue482
          );
        }
      }, "parseError"),
      parse: chunkAGHRB4JFN(function (vennDiagramDHZGUBPPParam14) {
        var vennDiagramDHZGUBPPValue106 = this,
          vennDiagramDHZGUBPPValue107 = [0],
          vennDiagramDHZGUBPPValue108 = [],
          vennDiagramDHZGUBPPValue109 = [null],
          vennDiagramDHZGUBPPValue110 = [],
          vennDiagramDHZGUBPPValue111 = this.table,
          vennDiagramDHZGUBPPValue112 = "",
          vennDiagramDHZGUBPPValue113 = 0,
          vennDiagramDHZGUBPPValue114 = 0,
          vennDiagramDHZGUBPPValue115 = 0,
          vennDiagramDHZGUBPPValue118 = vennDiagramDHZGUBPPValue110.slice.call(
            arguments,
            1,
          ),
          vennDiagramDHZGUBPPValue119 = Object.create(this.lexer),
          vennDiagramDHZGUBPPValue120 = {
            yy: {},
          };
        for (var vennDiagramDHZGUBPPValue121 in this.yy)
          Object.prototype.hasOwnProperty.call(
            this.yy,
            vennDiagramDHZGUBPPValue121,
          ) &&
            (vennDiagramDHZGUBPPValue120.yy[vennDiagramDHZGUBPPValue121] =
              this.yy[vennDiagramDHZGUBPPValue121]);
        vennDiagramDHZGUBPPValue119.setInput(
          vennDiagramDHZGUBPPParam14,
          vennDiagramDHZGUBPPValue120.yy,
        );
        vennDiagramDHZGUBPPValue120.yy.lexer = vennDiagramDHZGUBPPValue119;
        vennDiagramDHZGUBPPValue120.yy.parser = this;
        vennDiagramDHZGUBPPValue119.yylloc === undefined &&
          (vennDiagramDHZGUBPPValue119.yylloc = {});
        var vennDiagramDHZGUBPPValue122 = vennDiagramDHZGUBPPValue119.yylloc;
        vennDiagramDHZGUBPPValue110.push(vennDiagramDHZGUBPPValue122);
        var vennDiagramDHZGUBPPValue123 =
          vennDiagramDHZGUBPPValue119.options &&
          vennDiagramDHZGUBPPValue119.options.ranges;
        typeof vennDiagramDHZGUBPPValue120.yy.parseError == "function"
          ? (this.parseError = vennDiagramDHZGUBPPValue120.yy.parseError)
          : (this.parseError = Object.getPrototypeOf(this).parseError);
        function vennDiagramDHZGUBPPHelper54(vennDiagramDHZGUBPPParam182) {
          vennDiagramDHZGUBPPValue107.length -= 2 * vennDiagramDHZGUBPPParam182;
          vennDiagramDHZGUBPPValue109.length -= vennDiagramDHZGUBPPParam182;
          vennDiagramDHZGUBPPValue110.length -= vennDiagramDHZGUBPPParam182;
        }
        chunkAGHRB4JFN(vennDiagramDHZGUBPPHelper54, "popStack");
        function vennDiagramDHZGUBPPHelper55() {
          var vennDiagramDHZGUBPPValue425 =
            vennDiagramDHZGUBPPValue108.pop() ||
            vennDiagramDHZGUBPPValue119.lex() ||
            1;
          return (
            typeof vennDiagramDHZGUBPPValue425 != "number" &&
              (vennDiagramDHZGUBPPValue425 instanceof Array &&
                ((vennDiagramDHZGUBPPValue108 = vennDiagramDHZGUBPPValue425),
                (vennDiagramDHZGUBPPValue425 =
                  vennDiagramDHZGUBPPValue108.pop())),
              (vennDiagramDHZGUBPPValue425 =
                vennDiagramDHZGUBPPValue106.symbols_[
                  vennDiagramDHZGUBPPValue425
                ] || vennDiagramDHZGUBPPValue425)),
            vennDiagramDHZGUBPPValue425
          );
        }
        chunkAGHRB4JFN(vennDiagramDHZGUBPPHelper55, "lex");
        for (
          var vennDiagramDHZGUBPPValue124,
            vennDiagramDHZGUBPPValue125,
            vennDiagramDHZGUBPPValue126,
            vennDiagramDHZGUBPPValue127,
            vennDiagramDHZGUBPPValue128,
            vennDiagramDHZGUBPPValue129 = {},
            vennDiagramDHZGUBPPValue130,
            vennDiagramDHZGUBPPValue131,
            vennDiagramDHZGUBPPValue132,
            vennDiagramDHZGUBPPValue133;
          ;

        ) {
          if (
            ((vennDiagramDHZGUBPPValue126 =
              vennDiagramDHZGUBPPValue107[
                vennDiagramDHZGUBPPValue107.length - 1
              ]),
            this.defaultActions[vennDiagramDHZGUBPPValue126]
              ? (vennDiagramDHZGUBPPValue127 =
                  this.defaultActions[vennDiagramDHZGUBPPValue126])
              : ((vennDiagramDHZGUBPPValue124 ??=
                  vennDiagramDHZGUBPPHelper55()),
                (vennDiagramDHZGUBPPValue127 =
                  vennDiagramDHZGUBPPValue111[vennDiagramDHZGUBPPValue126] &&
                  vennDiagramDHZGUBPPValue111[vennDiagramDHZGUBPPValue126][
                    vennDiagramDHZGUBPPValue124
                  ])),
            vennDiagramDHZGUBPPValue127 === undefined ||
              !vennDiagramDHZGUBPPValue127.length ||
              !vennDiagramDHZGUBPPValue127[0])
          ) {
            var vennDiagramDHZGUBPPValue134 = "";
            for (vennDiagramDHZGUBPPValue130 in ((vennDiagramDHZGUBPPValue133 =
              []),
            vennDiagramDHZGUBPPValue111[vennDiagramDHZGUBPPValue126]))
              this.terminals_[vennDiagramDHZGUBPPValue130] &&
                vennDiagramDHZGUBPPValue130 > 2 &&
                vennDiagramDHZGUBPPValue133.push(
                  "'" + this.terminals_[vennDiagramDHZGUBPPValue130] + "'",
                );
            vennDiagramDHZGUBPPValue134 =
              vennDiagramDHZGUBPPValue119.showPosition
                ? "Parse error on line " +
                  (vennDiagramDHZGUBPPValue113 + 1) +
                  ":\n" +
                  vennDiagramDHZGUBPPValue119.showPosition() +
                  "\nExpecting " +
                  vennDiagramDHZGUBPPValue133.join(", ") +
                  ", got '" +
                  (this.terminals_[vennDiagramDHZGUBPPValue124] ||
                    vennDiagramDHZGUBPPValue124) +
                  "'"
                : "Parse error on line " +
                  (vennDiagramDHZGUBPPValue113 + 1) +
                  ": Unexpected " +
                  (vennDiagramDHZGUBPPValue124 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[vennDiagramDHZGUBPPValue124] ||
                        vennDiagramDHZGUBPPValue124) +
                      "'");
            this.parseError(vennDiagramDHZGUBPPValue134, {
              text: vennDiagramDHZGUBPPValue119.match,
              token:
                this.terminals_[vennDiagramDHZGUBPPValue124] ||
                vennDiagramDHZGUBPPValue124,
              line: vennDiagramDHZGUBPPValue119.yylineno,
              loc: vennDiagramDHZGUBPPValue122,
              expected: vennDiagramDHZGUBPPValue133,
            });
          }
          if (
            vennDiagramDHZGUBPPValue127[0] instanceof Array &&
            vennDiagramDHZGUBPPValue127.length > 1
          )
            throw Error(
              "Parse Error: multiple actions possible at state: " +
                vennDiagramDHZGUBPPValue126 +
                ", token: " +
                vennDiagramDHZGUBPPValue124,
            );
          switch (vennDiagramDHZGUBPPValue127[0]) {
            case 1:
              vennDiagramDHZGUBPPValue107.push(vennDiagramDHZGUBPPValue124);
              vennDiagramDHZGUBPPValue109.push(
                vennDiagramDHZGUBPPValue119.yytext,
              );
              vennDiagramDHZGUBPPValue110.push(
                vennDiagramDHZGUBPPValue119.yylloc,
              );
              vennDiagramDHZGUBPPValue107.push(vennDiagramDHZGUBPPValue127[1]);
              vennDiagramDHZGUBPPValue124 = null;
              vennDiagramDHZGUBPPValue125
                ? ((vennDiagramDHZGUBPPValue124 = vennDiagramDHZGUBPPValue125),
                  (vennDiagramDHZGUBPPValue125 = null))
                : ((vennDiagramDHZGUBPPValue114 =
                    vennDiagramDHZGUBPPValue119.yyleng),
                  (vennDiagramDHZGUBPPValue112 =
                    vennDiagramDHZGUBPPValue119.yytext),
                  (vennDiagramDHZGUBPPValue113 =
                    vennDiagramDHZGUBPPValue119.yylineno),
                  (vennDiagramDHZGUBPPValue122 =
                    vennDiagramDHZGUBPPValue119.yylloc),
                  vennDiagramDHZGUBPPValue115 > 0 &&
                    vennDiagramDHZGUBPPValue115--);
              break;
            case 2:
              if (
                ((vennDiagramDHZGUBPPValue131 =
                  this.productions_[vennDiagramDHZGUBPPValue127[1]][1]),
                (vennDiagramDHZGUBPPValue129.$ =
                  vennDiagramDHZGUBPPValue109[
                    vennDiagramDHZGUBPPValue109.length -
                      vennDiagramDHZGUBPPValue131
                  ]),
                (vennDiagramDHZGUBPPValue129._$ = {
                  first_line:
                    vennDiagramDHZGUBPPValue110[
                      vennDiagramDHZGUBPPValue110.length -
                        (vennDiagramDHZGUBPPValue131 || 1)
                    ].first_line,
                  last_line:
                    vennDiagramDHZGUBPPValue110[
                      vennDiagramDHZGUBPPValue110.length - 1
                    ].last_line,
                  first_column:
                    vennDiagramDHZGUBPPValue110[
                      vennDiagramDHZGUBPPValue110.length -
                        (vennDiagramDHZGUBPPValue131 || 1)
                    ].first_column,
                  last_column:
                    vennDiagramDHZGUBPPValue110[
                      vennDiagramDHZGUBPPValue110.length - 1
                    ].last_column,
                }),
                vennDiagramDHZGUBPPValue123 &&
                  (vennDiagramDHZGUBPPValue129._$.range = [
                    vennDiagramDHZGUBPPValue110[
                      vennDiagramDHZGUBPPValue110.length -
                        (vennDiagramDHZGUBPPValue131 || 1)
                    ].range[0],
                    vennDiagramDHZGUBPPValue110[
                      vennDiagramDHZGUBPPValue110.length - 1
                    ].range[1],
                  ]),
                (vennDiagramDHZGUBPPValue128 = this.performAction.apply(
                  vennDiagramDHZGUBPPValue129,
                  [
                    vennDiagramDHZGUBPPValue112,
                    vennDiagramDHZGUBPPValue114,
                    vennDiagramDHZGUBPPValue113,
                    vennDiagramDHZGUBPPValue120.yy,
                    vennDiagramDHZGUBPPValue127[1],
                    vennDiagramDHZGUBPPValue109,
                    vennDiagramDHZGUBPPValue110,
                  ].concat(vennDiagramDHZGUBPPValue118),
                )),
                vennDiagramDHZGUBPPValue128 !== undefined)
              )
                return vennDiagramDHZGUBPPValue128;
              vennDiagramDHZGUBPPValue131 &&
                ((vennDiagramDHZGUBPPValue107 =
                  vennDiagramDHZGUBPPValue107.slice(
                    0,
                    -1 * vennDiagramDHZGUBPPValue131 * 2,
                  )),
                (vennDiagramDHZGUBPPValue109 =
                  vennDiagramDHZGUBPPValue109.slice(
                    0,
                    -1 * vennDiagramDHZGUBPPValue131,
                  )),
                (vennDiagramDHZGUBPPValue110 =
                  vennDiagramDHZGUBPPValue110.slice(
                    0,
                    -1 * vennDiagramDHZGUBPPValue131,
                  )));
              vennDiagramDHZGUBPPValue107.push(
                this.productions_[vennDiagramDHZGUBPPValue127[1]][0],
              );
              vennDiagramDHZGUBPPValue109.push(vennDiagramDHZGUBPPValue129.$);
              vennDiagramDHZGUBPPValue110.push(vennDiagramDHZGUBPPValue129._$);
              vennDiagramDHZGUBPPValue132 =
                vennDiagramDHZGUBPPValue111[
                  vennDiagramDHZGUBPPValue107[
                    vennDiagramDHZGUBPPValue107.length - 2
                  ]
                ][
                  vennDiagramDHZGUBPPValue107[
                    vennDiagramDHZGUBPPValue107.length - 1
                  ]
                ];
              vennDiagramDHZGUBPPValue107.push(vennDiagramDHZGUBPPValue132);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse"),
    };
  vennDiagramDHZGUBPPValue44.lexer = (function () {
    return {
      EOF: 1,
      parseError: chunkAGHRB4JFN(function (
        vennDiagramDHZGUBPPParam147,
        vennDiagramDHZGUBPPParam148,
      ) {
        if (this.yy.parser)
          this.yy.parser.parseError(
            vennDiagramDHZGUBPPParam147,
            vennDiagramDHZGUBPPParam148,
          );
        else throw Error(vennDiagramDHZGUBPPParam147);
      }, "parseError"),
      setInput: chunkAGHRB4JFN(function (
        vennDiagramDHZGUBPPParam90,
        vennDiagramDHZGUBPPParam91,
      ) {
        return (
          (this.yy = vennDiagramDHZGUBPPParam91 || this.yy || {}),
          (this._input = vennDiagramDHZGUBPPParam90),
          (this._more = this._backtrack = this.done = false),
          (this.yylineno = this.yyleng = 0),
          (this.yytext = this.matched = this.match = ""),
          (this.conditionStack = ["INITIAL"]),
          (this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0,
          }),
          this.options.ranges && (this.yylloc.range = [0, 0]),
          (this.offset = 0),
          this
        );
      }, "setInput"),
      input: chunkAGHRB4JFN(function () {
        var vennDiagramDHZGUBPPValue344 = this._input[0];
        return (
          (this.yytext += vennDiagramDHZGUBPPValue344),
          this.yyleng++,
          this.offset++,
          (this.match += vennDiagramDHZGUBPPValue344),
          (this.matched += vennDiagramDHZGUBPPValue344),
          vennDiagramDHZGUBPPValue344.match(/(?:\r\n?|\n).*/g)
            ? (this.yylineno++, this.yylloc.last_line++)
            : this.yylloc.last_column++,
          this.options.ranges && this.yylloc.range[1]++,
          (this._input = this._input.slice(1)),
          vennDiagramDHZGUBPPValue344
        );
      }, "input"),
      unput: chunkAGHRB4JFN(function (vennDiagramDHZGUBPPParam46) {
        var vennDiagramDHZGUBPPValue228 = vennDiagramDHZGUBPPParam46.length,
          vennDiagramDHZGUBPPValue229 =
            vennDiagramDHZGUBPPParam46.split(/(?:\r\n?|\n)/g);
        this._input = vennDiagramDHZGUBPPParam46 + this._input;
        this.yytext = this.yytext.substr(
          0,
          this.yytext.length - vennDiagramDHZGUBPPValue228,
        );
        this.offset -= vennDiagramDHZGUBPPValue228;
        var vennDiagramDHZGUBPPValue230 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        vennDiagramDHZGUBPPValue229.length - 1 &&
          (this.yylineno -= vennDiagramDHZGUBPPValue229.length - 1);
        var vennDiagramDHZGUBPPValue231 = this.yylloc.range;
        return (
          (this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: vennDiagramDHZGUBPPValue229
              ? (vennDiagramDHZGUBPPValue229.length ===
                vennDiagramDHZGUBPPValue230.length
                  ? this.yylloc.first_column
                  : 0) +
                vennDiagramDHZGUBPPValue230[
                  vennDiagramDHZGUBPPValue230.length -
                    vennDiagramDHZGUBPPValue229.length
                ].length -
                vennDiagramDHZGUBPPValue229[0].length
              : this.yylloc.first_column - vennDiagramDHZGUBPPValue228,
          }),
          this.options.ranges &&
            (this.yylloc.range = [
              vennDiagramDHZGUBPPValue231[0],
              vennDiagramDHZGUBPPValue231[0] +
                this.yyleng -
                vennDiagramDHZGUBPPValue228,
            ]),
          (this.yyleng = this.yytext.length),
          this
        );
      }, "unput"),
      more: chunkAGHRB4JFN(function () {
        return ((this._more = true), this);
      }, "more"),
      reject: chunkAGHRB4JFN(function () {
        if (this.options.backtrack_lexer) this._backtrack = true;
        else
          return this.parseError(
            "Lexical error on line " +
              (this.yylineno + 1) +
              ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
              this.showPosition(),
            {
              text: "",
              token: null,
              line: this.yylineno,
            },
          );
        return this;
      }, "reject"),
      less: chunkAGHRB4JFN(function (vennDiagramDHZGUBPPParam202) {
        this.unput(this.match.slice(vennDiagramDHZGUBPPParam202));
      }, "less"),
      pastInput: chunkAGHRB4JFN(function () {
        var vennDiagramDHZGUBPPValue417 = this.matched.substr(
          0,
          this.matched.length - this.match.length,
        );
        return (
          (vennDiagramDHZGUBPPValue417.length > 20 ? "..." : "") +
          vennDiagramDHZGUBPPValue417.substr(-20).replace(/\n/g, "")
        );
      }, "pastInput"),
      upcomingInput: chunkAGHRB4JFN(function () {
        var vennDiagramDHZGUBPPValue410 = this.match;
        return (
          vennDiagramDHZGUBPPValue410.length < 20 &&
            (vennDiagramDHZGUBPPValue410 += this._input.substr(
              0,
              20 - vennDiagramDHZGUBPPValue410.length,
            )),
          (
            vennDiagramDHZGUBPPValue410.substr(0, 20) +
            (vennDiagramDHZGUBPPValue410.length > 20 ? "..." : "")
          ).replace(/\n/g, "")
        );
      }, "upcomingInput"),
      showPosition: chunkAGHRB4JFN(function () {
        var vennDiagramDHZGUBPPValue454 = this.pastInput(),
          vennDiagramDHZGUBPPValue455 = Array(
            vennDiagramDHZGUBPPValue454.length + 1,
          ).join("-");
        return (
          vennDiagramDHZGUBPPValue454 +
          this.upcomingInput() +
          "\n" +
          vennDiagramDHZGUBPPValue455 +
          "^"
        );
      }, "showPosition"),
      test_match: chunkAGHRB4JFN(function (
        vennDiagramDHZGUBPPParam26,
        vennDiagramDHZGUBPPParam27,
      ) {
        var vennDiagramDHZGUBPPValue179,
          vennDiagramDHZGUBPPValue180,
          vennDiagramDHZGUBPPValue181;
        if (
          (this.options.backtrack_lexer &&
            ((vennDiagramDHZGUBPPValue181 = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column,
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done,
            }),
            this.options.ranges &&
              (vennDiagramDHZGUBPPValue181.yylloc.range =
                this.yylloc.range.slice(0))),
          (vennDiagramDHZGUBPPValue180 =
            vennDiagramDHZGUBPPParam26[0].match(/(?:\r\n?|\n).*/g)),
          vennDiagramDHZGUBPPValue180 &&
            (this.yylineno += vennDiagramDHZGUBPPValue180.length),
          (this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: vennDiagramDHZGUBPPValue180
              ? vennDiagramDHZGUBPPValue180[
                  vennDiagramDHZGUBPPValue180.length - 1
                ].length -
                vennDiagramDHZGUBPPValue180[
                  vennDiagramDHZGUBPPValue180.length - 1
                ].match(/\r?\n?/)[0].length
              : this.yylloc.last_column + vennDiagramDHZGUBPPParam26[0].length,
          }),
          (this.yytext += vennDiagramDHZGUBPPParam26[0]),
          (this.match += vennDiagramDHZGUBPPParam26[0]),
          (this.matches = vennDiagramDHZGUBPPParam26),
          (this.yyleng = this.yytext.length),
          this.options.ranges &&
            (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
          (this._more = false),
          (this._backtrack = false),
          (this._input = this._input.slice(
            vennDiagramDHZGUBPPParam26[0].length,
          )),
          (this.matched += vennDiagramDHZGUBPPParam26[0]),
          (vennDiagramDHZGUBPPValue179 = this.performAction.call(
            this,
            this.yy,
            this,
            vennDiagramDHZGUBPPParam27,
            this.conditionStack[this.conditionStack.length - 1],
          )),
          this.done && this._input && (this.done = false),
          vennDiagramDHZGUBPPValue179)
        )
          return vennDiagramDHZGUBPPValue179;
        if (this._backtrack) {
          for (var vennDiagramDHZGUBPPValue182 in vennDiagramDHZGUBPPValue181)
            this[vennDiagramDHZGUBPPValue182] =
              vennDiagramDHZGUBPPValue181[vennDiagramDHZGUBPPValue182];
          return false;
        }
        return false;
      }, "test_match"),
      next: chunkAGHRB4JFN(function () {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var vennDiagramDHZGUBPPValue236,
          vennDiagramDHZGUBPPValue237,
          vennDiagramDHZGUBPPValue238,
          vennDiagramDHZGUBPPValue239;
        this._more || ((this.yytext = ""), (this.match = ""));
        for (
          var vennDiagramDHZGUBPPValue240 = this._currentRules(),
            vennDiagramDHZGUBPPValue241 = 0;
          vennDiagramDHZGUBPPValue241 < vennDiagramDHZGUBPPValue240.length;
          vennDiagramDHZGUBPPValue241++
        )
          if (
            ((vennDiagramDHZGUBPPValue238 = this._input.match(
              this.rules[
                vennDiagramDHZGUBPPValue240[vennDiagramDHZGUBPPValue241]
              ],
            )),
            vennDiagramDHZGUBPPValue238 &&
              (!vennDiagramDHZGUBPPValue237 ||
                vennDiagramDHZGUBPPValue238[0].length >
                  vennDiagramDHZGUBPPValue237[0].length))
          ) {
            if (
              ((vennDiagramDHZGUBPPValue237 = vennDiagramDHZGUBPPValue238),
              (vennDiagramDHZGUBPPValue239 = vennDiagramDHZGUBPPValue241),
              this.options.backtrack_lexer)
            ) {
              if (
                ((vennDiagramDHZGUBPPValue236 = this.test_match(
                  vennDiagramDHZGUBPPValue238,
                  vennDiagramDHZGUBPPValue240[vennDiagramDHZGUBPPValue241],
                )),
                vennDiagramDHZGUBPPValue236 !== false)
              )
                return vennDiagramDHZGUBPPValue236;
              if (this._backtrack) {
                vennDiagramDHZGUBPPValue237 = false;
                continue;
              } else return false;
            } else if (!this.options.flex) break;
          }
        return vennDiagramDHZGUBPPValue237
          ? ((vennDiagramDHZGUBPPValue236 = this.test_match(
              vennDiagramDHZGUBPPValue237,
              vennDiagramDHZGUBPPValue240[vennDiagramDHZGUBPPValue239],
            )),
            vennDiagramDHZGUBPPValue236 === false
              ? false
              : vennDiagramDHZGUBPPValue236)
          : this._input === ""
            ? this.EOF
            : this.parseError(
                "Lexical error on line " +
                  (this.yylineno + 1) +
                  ". Unrecognized text.\n" +
                  this.showPosition(),
                {
                  text: "",
                  token: null,
                  line: this.yylineno,
                },
              );
      }, "next"),
      lex: chunkAGHRB4JFN(function () {
        return this.next() || this.lex();
      }, "lex"),
      begin: chunkAGHRB4JFN(function (vennDiagramDHZGUBPPParam207) {
        this.conditionStack.push(vennDiagramDHZGUBPPParam207);
      }, "begin"),
      popState: chunkAGHRB4JFN(function () {
        return this.conditionStack.length - 1 > 0
          ? this.conditionStack.pop()
          : this.conditionStack[0];
      }, "popState"),
      _currentRules: chunkAGHRB4JFN(function () {
        return this.conditionStack.length &&
          this.conditionStack[this.conditionStack.length - 1]
          ? this.conditions[this.conditionStack[this.conditionStack.length - 1]]
              .rules
          : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      topState: chunkAGHRB4JFN(function (vennDiagramDHZGUBPPParam135) {
        return (
          (vennDiagramDHZGUBPPParam135 =
            this.conditionStack.length -
            1 -
            Math.abs(vennDiagramDHZGUBPPParam135 || 0)),
          vennDiagramDHZGUBPPParam135 >= 0
            ? this.conditionStack[vennDiagramDHZGUBPPParam135]
            : "INITIAL"
        );
      }, "topState"),
      pushState: chunkAGHRB4JFN(function (vennDiagramDHZGUBPPParam220) {
        this.begin(vennDiagramDHZGUBPPParam220);
      }, "pushState"),
      stateStackSize: chunkAGHRB4JFN(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true,
      },
      performAction: chunkAGHRB4JFN(function (
        vennDiagramDHZGUBPPParam34,
        vennDiagramDHZGUBPPParam35,
        vennDiagramDHZGUBPPParam36,
        vennDiagramDHZGUBPPParam37,
      ) {
        switch (vennDiagramDHZGUBPPParam36) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            break;
          case 3:
            if (
              vennDiagramDHZGUBPPParam34.getIndentMode &&
              vennDiagramDHZGUBPPParam34.getIndentMode()
            )
              return (
                (vennDiagramDHZGUBPPParam34.consumeIndentText = true),
                this.begin("INITIAL"),
                22
              );
            break;
          case 4:
            break;
          case 5:
            vennDiagramDHZGUBPPParam34.setIndentMode &&
              vennDiagramDHZGUBPPParam34.setIndentMode(false);
            this.begin("INITIAL");
            this.unput(vennDiagramDHZGUBPPParam35.yytext);
            break;
          case 6:
            return (this.begin("bol"), 8);
          case 7:
            break;
          case 8:
            break;
          case 9:
            return 7;
          case 10:
            return 11;
          case 11:
            return 5;
          case 12:
            return 12;
          case 13:
            return 17;
          case 14:
            if (vennDiagramDHZGUBPPParam34.consumeIndentText)
              vennDiagramDHZGUBPPParam34.consumeIndentText = false;
            else return 19;
            break;
          case 15:
            return 24;
          case 16:
            return (
              (vennDiagramDHZGUBPPParam35.yytext =
                vennDiagramDHZGUBPPParam35.yytext.slice(2, -2)),
              14
            );
          case 17:
            return (
              (vennDiagramDHZGUBPPParam35.yytext =
                vennDiagramDHZGUBPPParam35.yytext.slice(1, -1).trim()),
              14
            );
          case 18:
            return 16;
          case 19:
            return 31;
          case 20:
            return 33;
          case 21:
            return 32;
          case 22:
            return 20;
          case 23:
            return 21;
          case 24:
            return 27;
          case 25:
            return 15;
        }
      }, "anonymous"),
      rules: [
        /^(?:%%(?!\{)[^\n]*)/i,
        /^(?:[^\}]%%[^\n]*)/i,
        /^(?:[ \t]+(?=[\n\r]))/i,
        /^(?:[ \t]+(?=text\b))/i,
        /^(?:[ \t]+)/i,
        /^(?:[^ \t\n\r])/i,
        /^(?:[\n\r]+)/i,
        /^(?:%%[^\n]*)/i,
        /^(?:[ \t]+)/i,
        /^(?:$)/i,
        /^(?:title\s[^#\n;]+)/i,
        /^(?:venn-beta\b)/i,
        /^(?:set\b)/i,
        /^(?:union\b)/i,
        /^(?:text\b)/i,
        /^(?:style\b)/i,
        /^(?:\["[^\"]*"\])/i,
        /^(?:\[[^\]\"]+\])/i,
        /^(?:[+-]?(\d+(\.\d+)?|\.\d+))/i,
        /^(?:#[0-9a-fA-F]{3,8})/i,
        /^(?:rgba\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i,
        /^(?:rgb\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i,
        /^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,
        /^(?:"[^\"]*")/i,
        /^(?:,)/i,
        /^(?::)/i,
      ],
      conditions: {
        bol: {
          rules: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25,
          ],
          inclusive: true,
        },
        INITIAL: {
          rules: [
            0, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
            22, 23, 24, 25,
          ],
          inclusive: true,
        },
      },
    };
  })();
  function vennDiagramDHZGUBPPHelper49() {
    this.yy = {};
  }
  return (
    chunkAGHRB4JFN(vennDiagramDHZGUBPPHelper49, "Parser"),
    (vennDiagramDHZGUBPPHelper49.prototype = vennDiagramDHZGUBPPValue44),
    (vennDiagramDHZGUBPPValue44.Parser = vennDiagramDHZGUBPPHelper49),
    new vennDiagramDHZGUBPPHelper49()
  );
})();
vennDiagramDHZGUBPPValue4.parser = vennDiagramDHZGUBPPValue4;
var vennDiagramDHZGUBPPValue5 = vennDiagramDHZGUBPPValue4,
  vennDiagramDHZGUBPPValue6 = [],
  vennDiagramDHZGUBPPValue7 = [],
  vennDiagramDHZGUBPPValue8 = [],
  vennDiagramDHZGUBPPValue9 = new Set(),
  vennDiagramDHZGUBPPValue10,
  vennDiagramDHZGUBPPValue11 = false,
  vennDiagramDHZGUBPPValue12 = chunkAGHRB4JFN(
    (
      vennDiagramDHZGUBPPParam124,
      vennDiagramDHZGUBPPParam125,
      vennDiagramDHZGUBPPParam126,
    ) => {
      let vennDiagramDHZGUBPPValue428 = vennDiagramDHZGUBPPValue19(
          vennDiagramDHZGUBPPParam124,
        ).sort(),
        vennDiagramDHZGUBPPValue429 =
          vennDiagramDHZGUBPPParam126 ??
          10 / vennDiagramDHZGUBPPParam124.length ** 2;
      vennDiagramDHZGUBPPValue10 = vennDiagramDHZGUBPPValue428;
      vennDiagramDHZGUBPPValue428.length === 1 &&
        vennDiagramDHZGUBPPValue9.add(vennDiagramDHZGUBPPValue428[0]);
      vennDiagramDHZGUBPPValue6.push({
        sets: vennDiagramDHZGUBPPValue428,
        size: vennDiagramDHZGUBPPValue429,
        label: vennDiagramDHZGUBPPParam125
          ? vennDiagramDHZGUBPPValue14(vennDiagramDHZGUBPPParam125)
          : undefined,
      });
    },
    "addSubsetData",
  ),
  vennDiagramDHZGUBPPValue13 = chunkAGHRB4JFN(
    () => vennDiagramDHZGUBPPValue6,
    "getSubsetData",
  ),
  vennDiagramDHZGUBPPValue14 = chunkAGHRB4JFN((vennDiagramDHZGUBPPParam140) => {
    let vennDiagramDHZGUBPPValue471 = vennDiagramDHZGUBPPParam140.trim();
    return vennDiagramDHZGUBPPValue471.length >= 2 &&
      vennDiagramDHZGUBPPValue471.startsWith('"') &&
      vennDiagramDHZGUBPPValue471.endsWith('"')
      ? vennDiagramDHZGUBPPValue471.slice(1, -1)
      : vennDiagramDHZGUBPPValue471;
  }, "normalizeText"),
  vennDiagramDHZGUBPPValue15 = chunkAGHRB4JFN(
    (vennDiagramDHZGUBPPParam241) =>
      vennDiagramDHZGUBPPParam241 &&
      vennDiagramDHZGUBPPValue14(vennDiagramDHZGUBPPParam241),
    "normalizeStyleValue",
  ),
  vennDiagramDHZGUBPPValue16 = chunkAGHRB4JFN(
    (
      vennDiagramDHZGUBPPParam156,
      vennDiagramDHZGUBPPParam157,
      vennDiagramDHZGUBPPParam158,
    ) => {
      let vennDiagramDHZGUBPPValue488 = vennDiagramDHZGUBPPValue14(
        vennDiagramDHZGUBPPParam157,
      );
      vennDiagramDHZGUBPPValue7.push({
        sets: vennDiagramDHZGUBPPValue19(vennDiagramDHZGUBPPParam156).sort(),
        id: vennDiagramDHZGUBPPValue488,
        label: vennDiagramDHZGUBPPParam158
          ? vennDiagramDHZGUBPPValue14(vennDiagramDHZGUBPPParam158)
          : undefined,
      });
    },
    "addTextData",
  ),
  vennDiagramDHZGUBPPValue17 = chunkAGHRB4JFN(
    (vennDiagramDHZGUBPPParam138, vennDiagramDHZGUBPPParam139) => {
      let vennDiagramDHZGUBPPValue468 = vennDiagramDHZGUBPPValue19(
          vennDiagramDHZGUBPPParam138,
        ).sort(),
        vennDiagramDHZGUBPPValue469 = {};
      for (let [
        vennDiagramDHZGUBPPValue561,
        vennDiagramDHZGUBPPValue562,
      ] of vennDiagramDHZGUBPPParam139)
        vennDiagramDHZGUBPPValue469[vennDiagramDHZGUBPPValue561] =
          vennDiagramDHZGUBPPValue15(vennDiagramDHZGUBPPValue562) ??
          vennDiagramDHZGUBPPValue562;
      vennDiagramDHZGUBPPValue8.push({
        targets: vennDiagramDHZGUBPPValue468,
        styles: vennDiagramDHZGUBPPValue469,
      });
    },
    "addStyleData",
  ),
  vennDiagramDHZGUBPPValue18 = chunkAGHRB4JFN(
    () => vennDiagramDHZGUBPPValue8,
    "getStyleData",
  ),
  vennDiagramDHZGUBPPValue19 = chunkAGHRB4JFN(
    (vennDiagramDHZGUBPPParam235) =>
      vennDiagramDHZGUBPPParam235.map((item) =>
        vennDiagramDHZGUBPPValue14(item),
      ),
    "normalizeIdentifierList",
  ),
  vennDiagramDHZGUBPPValue20 = chunkAGHRB4JFN((vennDiagramDHZGUBPPParam130) => {
    let vennDiagramDHZGUBPPValue452 = vennDiagramDHZGUBPPValue19(
      vennDiagramDHZGUBPPParam130,
    ).filter((item) => !vennDiagramDHZGUBPPValue9.has(item));
    if (vennDiagramDHZGUBPPValue452.length > 0)
      throw Error(
        `unknown set identifier: ${vennDiagramDHZGUBPPValue452.join(", ")}`,
      );
  }, "validateUnionIdentifiers"),
  vennDiagramDHZGUBPPValue21 = chunkAGHRB4JFN(
    () => vennDiagramDHZGUBPPValue7,
    "getTextData",
  ),
  vennDiagramDHZGUBPPValue22 = chunkAGHRB4JFN(
    () => vennDiagramDHZGUBPPValue10,
    "getCurrentSets",
  ),
  vennDiagramDHZGUBPPValue23 = chunkAGHRB4JFN(
    () => vennDiagramDHZGUBPPValue11,
    "getIndentMode",
  ),
  vennDiagramDHZGUBPPValue24 = chunkAGHRB4JFN((vennDiagramDHZGUBPPParam243) => {
    vennDiagramDHZGUBPPValue11 = vennDiagramDHZGUBPPParam243;
  }, "setIndentMode"),
  vennDiagramDHZGUBPPValue25 = chunkICPOFSXXD.venn;
function vennDiagramDHZGUBPPHelper46() {
  return chunk5PVQY5BWP(vennDiagramDHZGUBPPValue25, chunkICPOFSXXW().venn);
}
chunkAGHRB4JFN(vennDiagramDHZGUBPPHelper46, "getConfig");
var vennDiagramDHZGUBPPValue26 = {
    getConfig: vennDiagramDHZGUBPPHelper46,
    clear: chunkAGHRB4JFN(() => {
      _chunkICPOFSXXL();
      vennDiagramDHZGUBPPValue6.length = 0;
      vennDiagramDHZGUBPPValue7.length = 0;
      vennDiagramDHZGUBPPValue8.length = 0;
      vennDiagramDHZGUBPPValue9.clear();
      vennDiagramDHZGUBPPValue10 = undefined;
      vennDiagramDHZGUBPPValue11 = false;
    }, "customClear"),
    setAccTitle: chunkICPOFSXXV,
    getAccTitle: _chunkICPOFSXXV,
    setDiagramTitle: _chunkICPOFSXXD,
    getDiagramTitle: chunkICPOFSXXF,
    getAccDescription: _chunkICPOFSXXK,
    setAccDescription: _chunkICPOFSXXN,
    addSubsetData: vennDiagramDHZGUBPPValue12,
    getSubsetData: vennDiagramDHZGUBPPValue13,
    addTextData: vennDiagramDHZGUBPPValue16,
    addStyleData: vennDiagramDHZGUBPPValue17,
    validateUnionIdentifiers: vennDiagramDHZGUBPPValue20,
    getTextData: vennDiagramDHZGUBPPValue21,
    getStyleData: vennDiagramDHZGUBPPValue18,
    getCurrentSets: vennDiagramDHZGUBPPValue22,
    getIndentMode: vennDiagramDHZGUBPPValue23,
    setIndentMode: vennDiagramDHZGUBPPValue24,
  },
  vennDiagramDHZGUBPPValue27 = chunkAGHRB4JFN(
    (vennDiagramDHZGUBPPParam72) => `
  .venn-title {
    font-size: 32px;
    fill: ${vennDiagramDHZGUBPPParam72.vennTitleTextColor};
    font-family: ${vennDiagramDHZGUBPPParam72.fontFamily};
  }

  .venn-circle text {
    font-size: 48px;
    font-family: ${vennDiagramDHZGUBPPParam72.fontFamily};
  }

  .venn-intersection text {
    font-size: 48px;
    fill: ${vennDiagramDHZGUBPPParam72.vennSetTextColor};
    font-family: ${vennDiagramDHZGUBPPParam72.fontFamily};
  }

  .venn-text-node {
    font-family: ${vennDiagramDHZGUBPPParam72.fontFamily};
    color: ${vennDiagramDHZGUBPPParam72.vennSetTextColor};
  }
`,
    "getStyles",
  );
function vennDiagramDHZGUBPPHelper47(vennDiagramDHZGUBPPParam116) {
  let vennDiagramDHZGUBPPValue414 = new Map();
  for (let vennDiagramDHZGUBPPValue456 of vennDiagramDHZGUBPPParam116) {
    let vennDiagramDHZGUBPPValue474 =
        vennDiagramDHZGUBPPValue456.targets.join("|"),
      vennDiagramDHZGUBPPValue475 = vennDiagramDHZGUBPPValue414.get(
        vennDiagramDHZGUBPPValue474,
      );
    vennDiagramDHZGUBPPValue475
      ? Object.assign(
          vennDiagramDHZGUBPPValue475,
          vennDiagramDHZGUBPPValue456.styles,
        )
      : vennDiagramDHZGUBPPValue414.set(vennDiagramDHZGUBPPValue474, {
          ...vennDiagramDHZGUBPPValue456.styles,
        });
  }
  return vennDiagramDHZGUBPPValue414;
}
chunkAGHRB4JFN(vennDiagramDHZGUBPPHelper47, "buildStyleByKey");
var vennDiagramDHZGUBPPValue28 = chunkAGHRB4JFN(
  (
    vennDiagramDHZGUBPPParam2,
    vennDiagramDHZGUBPPParam3,
    vennDiagramDHZGUBPPParam4,
    vennDiagramDHZGUBPPParam5,
  ) => {
    let vennDiagramDHZGUBPPValue66 = vennDiagramDHZGUBPPParam5.db,
      vennDiagramDHZGUBPPValue67 = vennDiagramDHZGUBPPValue66.getConfig?.(),
      { themeVariables, look, handDrawnSeed } = chunkICPOFSXXW(),
      vennDiagramDHZGUBPPValue68 = look === "handDrawn",
      vennDiagramDHZGUBPPValue69 = [
        themeVariables.venn1,
        themeVariables.venn2,
        themeVariables.venn3,
        themeVariables.venn4,
        themeVariables.venn5,
        themeVariables.venn6,
        themeVariables.venn7,
        themeVariables.venn8,
      ].filter(Boolean),
      vennDiagramDHZGUBPPValue70 =
        vennDiagramDHZGUBPPValue66.getDiagramTitle?.(),
      vennDiagramDHZGUBPPValue71 = vennDiagramDHZGUBPPValue66.getSubsetData(),
      vennDiagramDHZGUBPPValue72 = vennDiagramDHZGUBPPValue66.getTextData(),
      vennDiagramDHZGUBPPValue73 = vennDiagramDHZGUBPPHelper47(
        vennDiagramDHZGUBPPValue66.getStyleData(),
      ),
      vennDiagramDHZGUBPPValue74 = vennDiagramDHZGUBPPValue67?.width ?? 800,
      vennDiagramDHZGUBPPValue75 = vennDiagramDHZGUBPPValue67?.height ?? 450,
      vennDiagramDHZGUBPPValue76 = vennDiagramDHZGUBPPValue74 / 1600,
      vennDiagramDHZGUBPPValue77 = vennDiagramDHZGUBPPValue70
        ? 48 * vennDiagramDHZGUBPPValue76
        : 0,
      vennDiagramDHZGUBPPValue78 =
        themeVariables.primaryTextColor ?? themeVariables.textColor,
      vennDiagramDHZGUBPPValue79 = chunk426QAEUC(vennDiagramDHZGUBPPParam3);
    vennDiagramDHZGUBPPValue79.attr(
      "viewBox",
      `0 0 ${vennDiagramDHZGUBPPValue74} ${vennDiagramDHZGUBPPValue75}`,
    );
    vennDiagramDHZGUBPPValue70 &&
      vennDiagramDHZGUBPPValue79
        .append("text")
        .text(vennDiagramDHZGUBPPValue70)
        .attr("class", "venn-title")
        .attr("font-size", `${32 * vennDiagramDHZGUBPPValue76}px`)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("x", "50%")
        .attr("y", 32 * vennDiagramDHZGUBPPValue76)
        .style(
          "fill",
          themeVariables.vennTitleTextColor || themeVariables.titleColor,
        );
    let vennDiagramDHZGUBPPValue80 = Src(document.createElement("div")),
      vennDiagramDHZGUBPPValue81 = vennDiagramDHZGUBPPHelper36()
        .width(vennDiagramDHZGUBPPValue74)
        .height(vennDiagramDHZGUBPPValue75 - vennDiagramDHZGUBPPValue77);
    vennDiagramDHZGUBPPValue80
      .datum(vennDiagramDHZGUBPPValue71)
      .call(vennDiagramDHZGUBPPValue81);
    let vennDiagramDHZGUBPPValue82 = vennDiagramDHZGUBPPValue68
        ? rough.svg(vennDiagramDHZGUBPPValue80.select("svg").node())
        : undefined,
      vennDiagramDHZGUBPPValue83 = vennDiagramDHZGUBPPHelper45(
        vennDiagramDHZGUBPPValue71,
        {
          width: vennDiagramDHZGUBPPValue74,
          height: vennDiagramDHZGUBPPValue75 - vennDiagramDHZGUBPPValue77,
          padding: vennDiagramDHZGUBPPValue67?.padding ?? 15,
        },
      ),
      vennDiagramDHZGUBPPValue84 = new Map();
    for (let vennDiagramDHZGUBPPValue518 of vennDiagramDHZGUBPPValue83) {
      let vennDiagramDHZGUBPPValue542 = vennDiagramDHZGUBPPHelper48(
        [...vennDiagramDHZGUBPPValue518.data.sets].sort(),
      );
      vennDiagramDHZGUBPPValue84.set(
        vennDiagramDHZGUBPPValue542,
        vennDiagramDHZGUBPPValue518,
      );
    }
    vennDiagramDHZGUBPPValue72.length > 0 &&
      $(
        vennDiagramDHZGUBPPValue67,
        vennDiagramDHZGUBPPValue84,
        vennDiagramDHZGUBPPValue80,
        vennDiagramDHZGUBPPValue72,
        vennDiagramDHZGUBPPValue76,
        vennDiagramDHZGUBPPValue73,
      );
    let vennDiagramDHZGUBPPValue85 = invertO(
      themeVariables.background || "#f4f4f4",
    );
    vennDiagramDHZGUBPPValue80
      .selectAll(".venn-circle")
      .each(function (vennDiagramDHZGUBPPParam32, vennDiagramDHZGUBPPParam33) {
        let vennDiagramDHZGUBPPValue204 = Src(this),
          vennDiagramDHZGUBPPValue205 = vennDiagramDHZGUBPPHelper48(
            [...vennDiagramDHZGUBPPParam32.sets].sort(),
          ),
          vennDiagramDHZGUBPPValue206 = vennDiagramDHZGUBPPValue73.get(
            vennDiagramDHZGUBPPValue205,
          ),
          vennDiagramDHZGUBPPValue207 =
            vennDiagramDHZGUBPPValue206?.fill ||
            vennDiagramDHZGUBPPValue69[
              vennDiagramDHZGUBPPParam33 % vennDiagramDHZGUBPPValue69.length
            ] ||
            themeVariables.primaryColor;
        vennDiagramDHZGUBPPValue204.classed(
          `venn-set-${vennDiagramDHZGUBPPParam33 % 8}`,
          true,
        );
        let vennDiagramDHZGUBPPValue208 =
            vennDiagramDHZGUBPPValue206?.["fill-opacity"] ?? 0.1,
          vennDiagramDHZGUBPPValue209 =
            vennDiagramDHZGUBPPValue206?.stroke || vennDiagramDHZGUBPPValue207,
          vennDiagramDHZGUBPPValue210 =
            vennDiagramDHZGUBPPValue206?.["stroke-width"] ||
            `${5 * vennDiagramDHZGUBPPValue76}`;
        if (vennDiagramDHZGUBPPValue68 && vennDiagramDHZGUBPPValue82) {
          let vennDiagramDHZGUBPPValue321 = vennDiagramDHZGUBPPValue84.get(
            vennDiagramDHZGUBPPValue205,
          );
          if (
            vennDiagramDHZGUBPPValue321 &&
            vennDiagramDHZGUBPPValue321.circles.length > 0
          ) {
            let vennDiagramDHZGUBPPValue346 =
                vennDiagramDHZGUBPPValue321.circles[0],
              vennDiagramDHZGUBPPValue347 = vennDiagramDHZGUBPPValue82.circle(
                vennDiagramDHZGUBPPValue346.x,
                vennDiagramDHZGUBPPValue346.y,
                vennDiagramDHZGUBPPValue346.radius * 2,
                {
                  roughness: 0.7,
                  seed: handDrawnSeed,
                  fill: vennDiagramDHZGUBPPValue1(
                    vennDiagramDHZGUBPPValue207,
                    0.7,
                  ),
                  fillStyle: "hachure",
                  fillWeight: 2,
                  hachureGap: 8,
                  hachureAngle: -41 + vennDiagramDHZGUBPPParam33 * 60,
                  stroke: vennDiagramDHZGUBPPValue209,
                  strokeWidth: parseFloat(String(vennDiagramDHZGUBPPValue210)),
                },
              );
            vennDiagramDHZGUBPPValue204.select("path").remove();
            vennDiagramDHZGUBPPValue204
              .node()
              ?.insertBefore(
                vennDiagramDHZGUBPPValue347,
                vennDiagramDHZGUBPPValue204.select("text").node(),
              );
          }
        } else
          vennDiagramDHZGUBPPValue204
            .select("path")
            .style("fill", vennDiagramDHZGUBPPValue207)
            .style("fill-opacity", vennDiagramDHZGUBPPValue208)
            .style("stroke", vennDiagramDHZGUBPPValue209)
            .style("stroke-width", vennDiagramDHZGUBPPValue210)
            .style("stroke-opacity", 0.95);
        let vennDiagramDHZGUBPPValue211 =
          vennDiagramDHZGUBPPValue206?.color ||
          (vennDiagramDHZGUBPPValue85
            ? invertI(vennDiagramDHZGUBPPValue207, 30)
            : invertR(vennDiagramDHZGUBPPValue207, 30));
        vennDiagramDHZGUBPPValue204
          .select("text")
          .style("font-size", `${48 * vennDiagramDHZGUBPPValue76}px`)
          .style("fill", vennDiagramDHZGUBPPValue211);
      });
    vennDiagramDHZGUBPPValue68 && vennDiagramDHZGUBPPValue82
      ? vennDiagramDHZGUBPPValue80
          .selectAll(".venn-intersection")
          .each(function (vennDiagramDHZGUBPPParam65) {
            let vennDiagramDHZGUBPPValue289 = Src(this),
              vennDiagramDHZGUBPPValue290 = vennDiagramDHZGUBPPHelper48(
                [...vennDiagramDHZGUBPPParam65.sets].sort(),
              ),
              vennDiagramDHZGUBPPValue291 = vennDiagramDHZGUBPPValue73.get(
                vennDiagramDHZGUBPPValue290,
              ),
              vennDiagramDHZGUBPPValue292 = vennDiagramDHZGUBPPValue291?.fill;
            if (vennDiagramDHZGUBPPValue292) {
              let vennDiagramDHZGUBPPValue367 =
                  vennDiagramDHZGUBPPValue289.select("path"),
                vennDiagramDHZGUBPPValue368 =
                  vennDiagramDHZGUBPPValue367.attr("d");
              if (vennDiagramDHZGUBPPValue368) {
                let vennDiagramDHZGUBPPValue391 =
                    vennDiagramDHZGUBPPValue82.path(
                      vennDiagramDHZGUBPPValue368,
                      {
                        roughness: 0.7,
                        seed: handDrawnSeed,
                        fill: vennDiagramDHZGUBPPValue1(
                          vennDiagramDHZGUBPPValue292,
                          0.3,
                        ),
                        fillStyle: "cross-hatch",
                        fillWeight: 2,
                        hachureGap: 6,
                        hachureAngle: 60,
                        stroke: "none",
                      },
                    ),
                  vennDiagramDHZGUBPPValue392 =
                    vennDiagramDHZGUBPPValue367.node();
                vennDiagramDHZGUBPPValue392?.parentNode?.insertBefore(
                  vennDiagramDHZGUBPPValue391,
                  vennDiagramDHZGUBPPValue392,
                );
                vennDiagramDHZGUBPPValue367.remove();
              }
            } else
              vennDiagramDHZGUBPPValue289
                .select("path")
                .style("fill-opacity", 0);
            vennDiagramDHZGUBPPValue289
              .select("text")
              .style("font-size", `${48 * vennDiagramDHZGUBPPValue76}px`)
              .style(
                "fill",
                vennDiagramDHZGUBPPValue291?.color ??
                  themeVariables.vennSetTextColor ??
                  vennDiagramDHZGUBPPValue78,
              );
          })
      : (vennDiagramDHZGUBPPValue80
          .selectAll(".venn-intersection text")
          .style("font-size", `${48 * vennDiagramDHZGUBPPValue76}px`)
          .style("fill", (vennDiagramDHZGUBPPParam150) => {
            let vennDiagramDHZGUBPPValue484 = vennDiagramDHZGUBPPHelper48(
              [...vennDiagramDHZGUBPPParam150.sets].sort(),
            );
            return (
              vennDiagramDHZGUBPPValue73.get(vennDiagramDHZGUBPPValue484)
                ?.color ??
              themeVariables.vennSetTextColor ??
              vennDiagramDHZGUBPPValue78
            );
          }),
        vennDiagramDHZGUBPPValue80
          .selectAll(".venn-intersection path")
          .style("fill-opacity", (vennDiagramDHZGUBPPParam176) => {
            let vennDiagramDHZGUBPPValue521 = vennDiagramDHZGUBPPHelper48(
              [...vennDiagramDHZGUBPPParam176.sets].sort(),
            );
            return vennDiagramDHZGUBPPValue73.get(vennDiagramDHZGUBPPValue521)
              ?.fill
              ? 1
              : 0;
          })
          .style("fill", (vennDiagramDHZGUBPPParam162) => {
            let vennDiagramDHZGUBPPValue496 = vennDiagramDHZGUBPPHelper48(
              [...vennDiagramDHZGUBPPParam162.sets].sort(),
            );
            return (
              vennDiagramDHZGUBPPValue73.get(vennDiagramDHZGUBPPValue496)
                ?.fill ?? "transparent"
            );
          }));
    let vennDiagramDHZGUBPPValue86 = vennDiagramDHZGUBPPValue79
        .append("g")
        .attr("transform", `translate(0, ${vennDiagramDHZGUBPPValue77})`),
      vennDiagramDHZGUBPPValue87 = vennDiagramDHZGUBPPValue80
        .select("svg")
        .node();
    if (
      vennDiagramDHZGUBPPValue87 &&
      "childNodes" in vennDiagramDHZGUBPPValue87
    )
      for (let vennDiagramDHZGUBPPValue527 of [
        ...vennDiagramDHZGUBPPValue87.childNodes,
      ])
        vennDiagramDHZGUBPPValue86
          .node()
          ?.appendChild(vennDiagramDHZGUBPPValue527);
    _chunkICPOFSXXC(
      vennDiagramDHZGUBPPValue79,
      vennDiagramDHZGUBPPValue75,
      vennDiagramDHZGUBPPValue74,
      vennDiagramDHZGUBPPValue67?.useMaxWidth ?? true,
    );
  },
  "draw",
);
function vennDiagramDHZGUBPPHelper48(vennDiagramDHZGUBPPParam214) {
  return vennDiagramDHZGUBPPParam214.join("|");
}
chunkAGHRB4JFN(vennDiagramDHZGUBPPHelper48, "stableSetsKey");
function $(
  vennDiagramDHZGUBPPParam15,
  vennDiagramDHZGUBPPParam16,
  vennDiagramDHZGUBPPParam17,
  vennDiagramDHZGUBPPParam18,
  vennDiagramDHZGUBPPParam19,
  vennDiagramDHZGUBPPParam20,
) {
  let vennDiagramDHZGUBPPValue135 =
      vennDiagramDHZGUBPPParam15?.useDebugLayout ?? false,
    vennDiagramDHZGUBPPValue136 = vennDiagramDHZGUBPPParam17
      .select("svg")
      .append("g")
      .attr("class", "venn-text-nodes"),
    vennDiagramDHZGUBPPValue137 = new Map();
  for (let vennDiagramDHZGUBPPValue501 of vennDiagramDHZGUBPPParam18) {
    let vennDiagramDHZGUBPPValue528 = vennDiagramDHZGUBPPHelper48(
        vennDiagramDHZGUBPPValue501.sets,
      ),
      vennDiagramDHZGUBPPValue529 = vennDiagramDHZGUBPPValue137.get(
        vennDiagramDHZGUBPPValue528,
      );
    vennDiagramDHZGUBPPValue529
      ? vennDiagramDHZGUBPPValue529.push(vennDiagramDHZGUBPPValue501)
      : vennDiagramDHZGUBPPValue137.set(vennDiagramDHZGUBPPValue528, [
          vennDiagramDHZGUBPPValue501,
        ]);
  }
  for (let [
    vennDiagramDHZGUBPPValue138,
    vennDiagramDHZGUBPPValue139,
  ] of vennDiagramDHZGUBPPValue137.entries()) {
    let vennDiagramDHZGUBPPValue140 = vennDiagramDHZGUBPPParam16.get(
      vennDiagramDHZGUBPPValue138,
    );
    if (!vennDiagramDHZGUBPPValue140?.text) continue;
    let vennDiagramDHZGUBPPValue141 = vennDiagramDHZGUBPPValue140.text.x,
      vennDiagramDHZGUBPPValue142 = vennDiagramDHZGUBPPValue140.text.y,
      vennDiagramDHZGUBPPValue143 = Math.min(
        ...vennDiagramDHZGUBPPValue140.circles.map((item) => item.radius),
      ),
      vennDiagramDHZGUBPPValue144 = Math.min(
        ...vennDiagramDHZGUBPPValue140.circles.map(
          (item) =>
            item.radius -
            Math.hypot(
              vennDiagramDHZGUBPPValue141 - item.x,
              vennDiagramDHZGUBPPValue142 - item.y,
            ),
        ),
      ),
      vennDiagramDHZGUBPPValue145 = Number.isFinite(vennDiagramDHZGUBPPValue144)
        ? Math.max(0, vennDiagramDHZGUBPPValue144)
        : 0;
    vennDiagramDHZGUBPPValue145 === 0 &&
      Number.isFinite(vennDiagramDHZGUBPPValue143) &&
      (vennDiagramDHZGUBPPValue145 = vennDiagramDHZGUBPPValue143 * 0.6);
    let vennDiagramDHZGUBPPValue146 = vennDiagramDHZGUBPPValue136
      .append("g")
      .attr("class", "venn-text-area")
      .attr("font-size", `${40 * vennDiagramDHZGUBPPParam19}px`);
    vennDiagramDHZGUBPPValue135 &&
      vennDiagramDHZGUBPPValue146
        .append("circle")
        .attr("class", "venn-text-debug-circle")
        .attr("cx", vennDiagramDHZGUBPPValue141)
        .attr("cy", vennDiagramDHZGUBPPValue142)
        .attr("r", vennDiagramDHZGUBPPValue145)
        .attr("fill", "none")
        .attr("stroke", "purple")
        .attr("stroke-width", 1.5 * vennDiagramDHZGUBPPParam19)
        .attr(
          "stroke-dasharray",
          `${6 * vennDiagramDHZGUBPPParam19} ${4 * vennDiagramDHZGUBPPParam19}`,
        );
    let vennDiagramDHZGUBPPValue147 = Math.max(
        80 * vennDiagramDHZGUBPPParam19,
        vennDiagramDHZGUBPPValue145 * 2 * 0.95,
      ),
      vennDiagramDHZGUBPPValue148 = Math.max(
        60 * vennDiagramDHZGUBPPParam19,
        vennDiagramDHZGUBPPValue145 * 2 * 0.95,
      ),
      vennDiagramDHZGUBPPValue149 =
        (vennDiagramDHZGUBPPValue140.data.label &&
        vennDiagramDHZGUBPPValue140.data.label.length > 0
          ? Math.min(
              32 * vennDiagramDHZGUBPPParam19,
              vennDiagramDHZGUBPPValue145 * 0.25,
            )
          : 0) +
        (vennDiagramDHZGUBPPValue139.length <= 2
          ? 30 * vennDiagramDHZGUBPPParam19
          : 0),
      vennDiagramDHZGUBPPValue150 =
        vennDiagramDHZGUBPPValue141 - vennDiagramDHZGUBPPValue147 / 2,
      vennDiagramDHZGUBPPValue151 =
        vennDiagramDHZGUBPPValue142 -
        vennDiagramDHZGUBPPValue148 / 2 +
        vennDiagramDHZGUBPPValue149,
      vennDiagramDHZGUBPPValue152 = Math.max(
        1,
        Math.ceil(Math.sqrt(vennDiagramDHZGUBPPValue139.length)),
      ),
      vennDiagramDHZGUBPPValue153 = Math.max(
        1,
        Math.ceil(
          vennDiagramDHZGUBPPValue139.length / vennDiagramDHZGUBPPValue152,
        ),
      ),
      vennDiagramDHZGUBPPValue154 =
        vennDiagramDHZGUBPPValue147 / vennDiagramDHZGUBPPValue152,
      vennDiagramDHZGUBPPValue155 =
        vennDiagramDHZGUBPPValue148 / vennDiagramDHZGUBPPValue153;
    for (let [
      vennDiagramDHZGUBPPValue188,
      vennDiagramDHZGUBPPValue189,
    ] of vennDiagramDHZGUBPPValue139.entries()) {
      let vennDiagramDHZGUBPPValue190 =
          vennDiagramDHZGUBPPValue188 % vennDiagramDHZGUBPPValue152,
        vennDiagramDHZGUBPPValue191 = Math.floor(
          vennDiagramDHZGUBPPValue188 / vennDiagramDHZGUBPPValue152,
        ),
        vennDiagramDHZGUBPPValue192 =
          vennDiagramDHZGUBPPValue150 +
          vennDiagramDHZGUBPPValue154 * (vennDiagramDHZGUBPPValue190 + 0.5),
        vennDiagramDHZGUBPPValue193 =
          vennDiagramDHZGUBPPValue151 +
          vennDiagramDHZGUBPPValue155 * (vennDiagramDHZGUBPPValue191 + 0.5);
      vennDiagramDHZGUBPPValue135 &&
        vennDiagramDHZGUBPPValue146
          .append("rect")
          .attr("class", "venn-text-debug-cell")
          .attr(
            "x",
            vennDiagramDHZGUBPPValue150 +
              vennDiagramDHZGUBPPValue154 * vennDiagramDHZGUBPPValue190,
          )
          .attr(
            "y",
            vennDiagramDHZGUBPPValue151 +
              vennDiagramDHZGUBPPValue155 * vennDiagramDHZGUBPPValue191,
          )
          .attr("width", vennDiagramDHZGUBPPValue154)
          .attr("height", vennDiagramDHZGUBPPValue155)
          .attr("fill", "none")
          .attr("stroke", "teal")
          .attr("stroke-width", vennDiagramDHZGUBPPParam19)
          .attr(
            "stroke-dasharray",
            `${4 * vennDiagramDHZGUBPPParam19} ${3 * vennDiagramDHZGUBPPParam19}`,
          );
      let vennDiagramDHZGUBPPValue194 = vennDiagramDHZGUBPPValue154 * 0.9,
        vennDiagramDHZGUBPPValue195 = vennDiagramDHZGUBPPValue155 * 0.9,
        vennDiagramDHZGUBPPValue196 = vennDiagramDHZGUBPPValue146
          .append("foreignObject")
          .attr("class", "venn-text-node-fo")
          .attr("width", vennDiagramDHZGUBPPValue194)
          .attr("height", vennDiagramDHZGUBPPValue195)
          .attr(
            "x",
            vennDiagramDHZGUBPPValue192 - vennDiagramDHZGUBPPValue194 / 2,
          )
          .attr(
            "y",
            vennDiagramDHZGUBPPValue193 - vennDiagramDHZGUBPPValue195 / 2,
          )
          .attr("overflow", "visible"),
        vennDiagramDHZGUBPPValue197 = vennDiagramDHZGUBPPParam20.get(
          vennDiagramDHZGUBPPValue189.id,
        )?.color,
        vennDiagramDHZGUBPPValue198 = vennDiagramDHZGUBPPValue196
          .append("xhtml:span")
          .attr("class", "venn-text-node")
          .style("display", "flex")
          .style("width", "100%")
          .style("height", "100%")
          .style("white-space", "normal")
          .style("align-items", "center")
          .style("justify-content", "center")
          .style("text-align", "center")
          .style("overflow-wrap", "normal")
          .style("word-break", "normal")
          .text(
            vennDiagramDHZGUBPPValue189.label ?? vennDiagramDHZGUBPPValue189.id,
          );
      vennDiagramDHZGUBPPValue197 &&
        vennDiagramDHZGUBPPValue198.style("color", vennDiagramDHZGUBPPValue197);
    }
  }
}
chunkAGHRB4JFN($, "renderTextNodes");
export const VennDiagramDHZGUBPP = {
  parser: vennDiagramDHZGUBPPValue5,
  db: vennDiagramDHZGUBPPValue26,
  renderer: {
    draw: vennDiagramDHZGUBPPValue28,
  },
  styles: vennDiagramDHZGUBPPValue27,
};
