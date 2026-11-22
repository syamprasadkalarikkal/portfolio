'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/erpnext', label: 'ERPNext' },
  { href: '/#contact', label: 'Contact' },
];

export default function SiteNavigation() {
  const disclosure = useRef(null);
  const trigger = useRef(null);
  const closeButton = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      const menu = disclosure.current;
      if (menu?.open && !menu.contains(event.target)) menu.open = false;
    }

    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);

  function closeMenu() {
    disclosure.current.open = false;
  }

  function dismissMenu() {
    closeMenu();
    trigger.current.focus();
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape' && disclosure.current.open) {
      dismissMenu();
    }
  }

  return (
    <>
      <nav className="desktop-navigation" aria-label="Main navigation">
        {links.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <details ref={disclosure} className="mobile-navigation" onKeyDown={handleKeyDown} onToggle={(event) => {
        if (event.currentTarget.open) closeButton.current?.focus();
      }}>
        <summary ref={trigger}>
          <span className="menu-open-label">Menu</span>
          <span className="menu-close-label">Close</span>
          <FiMenu className="menu-open-icon" aria-hidden="true" />
          <FiX className="menu-close-icon" aria-hidden="true" />
        </summary>
        <button className="mobile-menu-backdrop" type="button" tabIndex={-1} aria-label="Dismiss menu" onClick={dismissMenu} />
        <nav className="mobile-menu-drawer" aria-label="Mobile navigation">
          <button ref={closeButton} className="mobile-menu-dismiss" type="button" onClick={dismissMenu}>
            Close <FiX aria-hidden="true" />
          </button>
          {links.map(({ href, label }) => <Link key={href} href={href} onClick={closeMenu}>{label}</Link>)}
        </nav>
      </details>
    </>
  );
}
