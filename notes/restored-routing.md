# 路由 (react-router) — 在 `restored/` 中的位置

Codex webview 渲染器没有实际的地址栏，因此路由构建于
**react-router 的 `MemoryRouter`** 以及应用自身的路由信号（signals）之上。这里
**没有声明式的 `<Routes><Route path=… element=…>` 表格** —— 路由是从路径字符串解析为
`RouteLocation` 辨析联合类型（discriminated union）的，页面则根据生成的路由信号进行渲染。
这就是为什么在目录树中看不到明显的“路由表”；相关组件列举如下。

## 路由构建 (react-router)

- **`app-shell/app-router-provider.tsx`** — `AppMemoryRouter` / `AppRouterProvider`。
  将整个 UI 挂载到 `MemoryRouter` 内部（设置 `unstable_useTransitions: false`）。
  这是构建产物中 `CodexApp → Xne → HM → MemoryRouter` 这一层级结构对应的部分。
- **`app-shell/codex-app.tsx`** — `CodexApp` 根组件；在 shell 外层渲染 `AppRouterProvider`。
  （完整的窗口区域面板树结构属于后续恢复工作的一部分。）
- **`vendor/react-router.ts`** — `react-router` 的简单重新导出适配层（shim）
  （包含 `MemoryRouter`、`Routes`、`Route`、`matchPath`、`useNavigate`、`useLocation`、
  `useParams`、`matchRoutes` 等）。

## 路由模型与解析器

- **`runtime/persisted-signal/routes.ts`** — `parseRouteLocation({pathname, search,
routeTemplate})`：这是 URL 到 `RouteLocation` 的核心解析函数。它使用 `matchPath`
  匹配诸如 `/local/:conversationId`、`/remote/:taskId`、`/hotkey-window/...`、
  `/projects`、`/`、`/extension/panel/new` 等模式，若无法匹配则回退到
  `routeKind: "other"`。此外还包含 `getRouteThreadLocationId` / `getRouteThreadId` /
  `getLocalConversationId` 等辅助函数。 - **`runtime/persisted-signal/route-ids.ts`** — 线程位置 ID 编码器
  （`toLocalThreadLocationId`、`toRemoteThreadLocationId`、`normalizeConversationId` 等）。
- **`runtime/persisted-signal/types.ts`** — `RouteLocation`、`routeKind` 联合类型
  （`home | new-thread-panel | local-thread | remote-thread | chatgpt-thread |
other | …`）、`ProjectRouteContext`。
- **`runtime/route-scope-provider.tsx`** — 针对每个路由的 React 作用域 + 路由延迟导入状态信号。

## 基于路由的标识 / 导航

- **`app-shell/app-view-route-helpers.ts`** — 基于 `routeKind` 获取 `getRouteThreadId` / 浏览器标签页 ID。
- **`app-shell/navigation-history-signals.ts`** — 后退/前进操作的状态。
- 各功能模块的路由定义（路径构建/解析 + 常量）：`appgen/project-site-routes.ts`、
  `settings/local-environment-create-route.ts`、`settings/settings-navigation/*-route.ts`、
  `sites/routes.ts`、`conversations/*-route*.ts`、`automation/automation-route-runtime.ts`、
  `routes/login-route.tsx`、`routes/open-home-route.ts` 等（可搜索 `*rout*`）。
- **`utils/initial-route-atom.ts`** — 从 `initial-route` meta 标签或 `?initialRoute=` 查询参数读取初始路由。

注意：`utils/routing-middleware.ts` 涉及的是 **Statsig 事件路由**，与 URL 路由无关。
