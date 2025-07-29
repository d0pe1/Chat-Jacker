#!/usr/bin/env python3
"""Chat-Jacker CLI entrypoint."""
from rich.console import Console
import typer
from cli.browser import launch_browser, save_state, ensure_logged_in

console = Console()
app = typer.Typer(help="Headless automation for ChatGPT and Codex")

@app.command()
def run(
    target: str = typer.Option(..., help="chatgpt or codex"),
    action: str = typer.Option(..., help="Action to perform"),
    query: str = typer.Option(None, help="Search or prompt text"),
    chat_id: str = typer.Option(None, help="Existing chat id"),
    task_id: str = typer.Option(None, help="Codex task id"),
):
    """Dispatch command to appropriate handler (stub)."
    pw, browser, storage_path = launch_browser()
    console.log("Browser launched headless")
    ensure_logged_in(browser, storage_path, "https://chat.openai.com")
    console.log(f"[bold green]target={target} action={action} query={query} chat_id={chat_id} task_id={task_id}")
    save_state(browser, storage_path)
    browser.close(); pw.stop()
# TODO: call browser module once implemented

if __name__ == "__main__":
    app()
