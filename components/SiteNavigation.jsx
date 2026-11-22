'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#about', label: 'About' },
  { href: '/erpnext', label: 'ERPNext' },
  { href: '/#contact', label: 'Contact' },
];

function NavigationLinks({ pathname, onClick }) {
  return links.map(({ href, label }) => {
    const current = pathname === href ? 'page' : pathname?.startsWith(href + '/') ? 'location' : undefined;
    return <Link key={href} href={href} aria-current={current} onClick={onClick}>{label}</Link>;
  });
}

export default function SiteNavigation() {
  const pathname = usePathname();
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
        <NavigationLinks pathname={pathname} />
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
          <NavigationLinks pathname={pathname} onClick={closeMenu} />
        </nav>
      </details>
    </>
  );
}
