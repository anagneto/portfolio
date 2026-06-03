# Get Claude Code Running — Follow Along

You'll go from nothing to your first AI prompt in about 10 minutes. Just follow the steps for your computer.

> This guide is also shown live in the deck: the **Thank you** slide has a "Setup instructions" button that opens this exact content in a modal (`InstructionsModal.tsx`). Keep the two in sync.

> **What you'll need:** an internet connection and an Anthropic account (you'll sign in during step 5 — free to create).
>
> **Download first:** grab the starter workspace (`claude-code-for-leaders-workspace.zip`) from the **"Grab the starter workspace"** button on the closing slide, and leave it in your `Downloads` folder. You'll use it in step 4.

---

## 🍎 macOS

### 1. Open the Terminal
Press `Cmd + Space`, type **Terminal**, press Enter.

### 2. Create a project folder
Type this and press Enter:
```bash
mkdir ~/Desktop/claude-demo
cd ~/Desktop/claude-demo
```
*(`mkdir` makes the folder; `cd` steps inside it. You'll now see `claude-demo` in your prompt.)*

> Prefer no typing? Right-click your Desktop → **New Folder** → name it `claude-demo`. Then in Terminal run `cd ~/Desktop/claude-demo`.

### 3. Install Claude Code
```bash
curl -fsSL https://claude.ai/install.sh | bash
```
Check it worked:
```bash
claude --version
```
> If you see *command not found*, open a new Terminal tab (`Cmd + T`), run `cd ~/Desktop/claude-demo`, and try `claude --version` again.

### 4. Add the workspace
```bash
unzip ~/Downloads/claude-code-for-leaders-workspace.zip -d ~/Desktop/claude-demo
```
> Or: double-click the downloaded zip in Finder to unzip it, then drag the contents into your `claude-demo` folder.

### 5. Start Claude Code
```bash
claude
```
The first time, your browser opens so you can **sign in** to your Anthropic account. After that, come back to the Terminal — you're in.

### 6. Run your first prompt
Inside Claude Code, type:
```
/init
```
Claude reads your project and writes a `CLAUDE.md` describing it. 🎉 You're up and running.

---

## 🪟 Windows

### 1. Open PowerShell
Press the `Windows` key, type **PowerShell**, press Enter.

### 2. Create a project folder
```powershell
mkdir $HOME\Desktop\claude-demo
cd $HOME\Desktop\claude-demo
```
> Prefer no typing? Right-click your Desktop → **New** → **Folder** → name it `claude-demo`. Then in PowerShell run `cd $HOME\Desktop\claude-demo`.

### 3. Install Claude Code
```powershell
irm https://claude.ai/install.ps1 | iex
```
Check it worked:
```powershell
claude --version
```
> If you see an error, close PowerShell and open a new window, then `cd $HOME\Desktop\claude-demo` and try `claude --version` again.

### 4. Add the workspace
Open your `Downloads` folder, right-click `claude-code-for-leaders-workspace.zip` → **Extract All…**, and copy the extracted contents into your `claude-demo` folder on the Desktop.

### 5. Start Claude Code
```powershell
claude
```
The first time, your browser opens so you can **sign in** to your Anthropic account. Then return to PowerShell.

### 6. Run your first prompt
Inside Claude Code, type:
```
/init
```
Claude reads your project and writes a `CLAUDE.md` describing it. 🎉 You're up and running.

---

## Cheat sheet

| Step | macOS | Windows |
|------|-------|---------|
| Make folder | `mkdir ~/Desktop/claude-demo` | `mkdir $HOME\Desktop\claude-demo` |
| Go inside | `cd ~/Desktop/claude-demo` | `cd $HOME\Desktop\claude-demo` |
| Install | `curl -fsSL https://claude.ai/install.sh \| bash` | `irm https://claude.ai/install.ps1 \| iex` |
| Verify | `claude --version` | `claude --version` |
| Add workspace | `unzip ~/Downloads/claude-code-for-leaders-workspace.zip -d .` | Extract zip → copy into folder |
| Start | `claude` | `claude` |
| First prompt | type `/init` inside Claude | type `/init` inside Claude |

**Stuck?** Most problems are fixed by opening a fresh terminal window after installing, then `cd`-ing back into your folder.
