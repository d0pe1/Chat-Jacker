"""Browser launcher utilities."""
from pathlib import Path
from playwright.sync_api import sync_playwright


def launch_browser(profile_dir: str = "./browser-data", storage_file: str = "storage.json"):
    """Launch a persistent browser context in headless mode with saved cookies."""
    pw = sync_playwright().start()
    profile = Path(profile_dir)
    profile.mkdir(exist_ok=True)
    storage_path = profile / storage_file
    if storage_path.exists():
        browser = pw.chromium.launch_persistent_context(str(profile), headless=True, storage_state=str(storage_path))
    else:
        browser = pw.chromium.launch_persistent_context(str(profile), headless=True)
    return pw, browser, storage_path

def save_state(browser, storage_path: Path):
    """Persist cookies to storage_path."""
    browser.storage_state(path=str(storage_path))

def ensure_logged_in(browser, storage_path: Path, login_url: str):
    """Open login page if no cookies and wait for user to authenticate once."""
    if not storage_path.exists():
        page = browser.new_page()
        page.goto(login_url)
        print("Please complete login in the opened browser...")
        input("Press Enter when done.")
        save_state(browser, storage_path)
        page.close()
