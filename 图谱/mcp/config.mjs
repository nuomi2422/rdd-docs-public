/** 公开版架构导航路径配置：自包含，只读本仓图谱与公开正文。
 * 不读取私有工作区、不依赖内部注册表、不连接游戏或网络。
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
export const knowledgeRoot = path.resolve(here, '..', '..');
export const graphFile = path.join(knowledgeRoot, '图谱', 'graph.json');
