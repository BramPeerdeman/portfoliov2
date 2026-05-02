import { useState, useEffect, useRef, useCallback } from 'react';
import './Terminal.css';

interface Line {
  text: string;
  cls?: 'green' | 'yellow' | 'blue' | 'muted' | 'red' | 'cyan' | '';
}

const BOOT: Line[] = [
  { text: 'Connected to brampeerdeman.com', cls: 'green' },
  { text: 'Last login: today from your.browser', cls: 'muted' },
  { text: '' },
  { text: '  ██████╗ ██████╗  █████╗ ███╗   ███╗', cls: 'cyan' },
  { text: '  ██╔══██╗██╔══██╗██╔══██╗████╗ ████║', cls: 'cyan' },
  { text: '  ██████╔╝██████╔╝███████║██╔████╔██║', cls: 'cyan' },
  { text: '  ██╔══██╗██╔══██╗██╔══██║██║╚██╔╝██║', cls: 'cyan' },
  { text: '  ██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║', cls: 'cyan' },
  { text: '  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝', cls: 'cyan' },
  { text: '' },
  { text: "Type 'help' for available commands.", cls: 'muted' },
  { text: '' },
];

const COMMANDS: Record<string, (args: string[]) => Line[] | '__CLEAR__'> = {
  help: () => [
    { text: 'Available commands:', cls: 'green' },
    { text: '' },
    { text: '  Navigation', cls: 'blue' },
    { text: "    ls                  list files and directories" },
    { text: "    ls projects/        list all projects" },
    { text: "    cat <file>          read a file  (about.txt · contact.txt · readme.md)" },
    { text: "    cd projects/<name>  open a project detail" },
    { text: '' },
    { text: '  Developer tools', cls: 'blue' },
    { text: "    skills              show full tech stack" },
    { text: "    git log             work & education history" },
    { text: "    docker ps           running services" },
    { text: "    neofetch            system info" },
    { text: '' },
    { text: '  Misc', cls: 'blue' },
    { text: "    whoami              identify yourself" },
    { text: "    contact             contact info" },
    { text: "    ping bram           check availability" },
    { text: "    sudo hire-me        ...try it" },
    { text: "    history             command history" },
    { text: "    clear               clear the terminal" },
  ],

  ls: (args) => {
    if (args[0] === 'projects/' || args[0] === 'projects') {
      return [
        { text: 'total 3', cls: 'muted' },
        { text: 'drwxr-xr-x  DEPLOYED   sightground/' },
        { text: 'drwxr-xr-x  COMPLETE   gereedschapmanager/' },
        { text: 'drwxr-xr-x  LIVE       portfoliov2/' },
      ];
    }
    return [
      { text: 'drwxr-xr-x  projects/' },
      { text: '  -rw-r--r--  about.txt' },
      { text: '  -rw-r--r--  contact.txt' },
      { text: '  -rw-r--r--  readme.md' },
    ];
  },

  cat: (args) => {
    const files: Record<string, Line[]> = {
      'about.txt': [
        { text: '# about.txt', cls: 'green' },
        { text: '' },
        { text: 'Name        : Bram Peerdeman' },
        { text: 'Location    : Delft, The Netherlands' },
        { text: 'Role        : Full-Stack Developer & DevOps Engineer' },
        { text: 'Education   : HBO Software Engineering @ De Haagse Hogeschool' },
        { text: '' },
        { text: 'I build secure, high-performance applications from the server', cls: 'muted' },
        { text: 'down to the UI. Passionate about backend architecture,', cls: 'muted' },
        { text: 'automation, and tackling complex technical challenges.', cls: 'muted' },
        { text: '' },
        { text: 'Stats:', cls: 'yellow' },
        { text: '  Projects completed : 10+' },
        { text: '  Years experience   : 2+' },
        { text: '  Coffee consumed    : ∞' },
      ],
      'contact.txt': [
        { text: '# contact.txt', cls: 'green' },
        { text: '' },
        { text: 'Email     : brampeer15@gmail.com' },
        { text: 'GitHub    : https://github.com/BramPeerdeman', cls: 'blue' },
        { text: 'LinkedIn  : https://linkedin.com/in/bram-peerdeman', cls: 'blue' },
        { text: '' },
        { text: 'Response time: usually < 24 hours.', cls: 'muted' },
      ],
      'readme.md': [
        { text: '# readme.md — Portfolio v2', cls: 'green' },
        { text: '' },
        { text: 'Built with React + TypeScript, hosted on Netlify.', cls: 'muted' },
        { text: 'Star Wars intro included. May the code be with you.', cls: 'muted' },
        { text: '' },
        { text: 'Source: https://github.com/BramPeerdeman/portfoliov2', cls: 'yellow' },
      ],
    };
    if (!args[0]) return [{ text: 'cat: missing operand', cls: 'red' }];
    return files[args[0]] ?? [{ text: `cat: ${args[0]}: No such file or directory`, cls: 'red' }];
  },

  cd: (args) => {
    const projects: Record<string, Line[]> = {
      sightground: [
        { text: '# Sightground — Website Scanner', cls: 'green' },
        { text: '' },
        { text: 'Status    : DEPLOYED', cls: 'yellow' },
        { text: 'Tech      : TypeScript · Node.js · Playwright · Docker' },
        { text: '' },
        { text: 'Automated website scanning service built during SocyList', cls: 'muted' },
        { text: 'internship. Analyzes security vulnerabilities and performance.', cls: 'muted' },
        { text: '' },
        { text: 'URL       : [confidential — company property]', cls: 'muted' },
      ],
      gereedschapmanager: [
        { text: '# Gereedschapsmanager', cls: 'green' },
        { text: '' },
        { text: 'Status    : COMPLETE', cls: 'yellow' },
        { text: 'Tech      : Java · Spring Boot · REST API' },
        { text: '' },
        { text: 'Robust backend inventory management system for equipment', cls: 'muted' },
        { text: 'tracking, user operations, and data persistence.', cls: 'muted' },
        { text: '' },
        { text: 'URL       : github.com/BramPeerdeman/gereedschapmanager-api', cls: 'blue' },
      ],
      portfoliov2: [
        { text: '# Portfolio v2 — This very site', cls: 'green' },
        { text: '' },
        { text: 'Status    : LIVE', cls: 'yellow' },
        { text: 'Tech      : React.js · TypeScript · CSS · Netlify' },
        { text: '' },
        { text: 'Fully responsive SPA with a Star Wars opening crawl intro', cls: 'muted' },
        { text: 'and a hidden terminal easter egg. You found it.', cls: 'muted' },
        { text: '' },
        { text: 'URL       : github.com/BramPeerdeman/portfoliov2', cls: 'blue' },
      ],
    };
    const name = (args[0] ?? '').replace('projects/', '').replace('/', '');
    if (!name) return [{ text: 'cd: missing argument', cls: 'muted' }];
    return projects[name] ?? [{ text: `cd: ${args[0]}: No such file or directory`, cls: 'red' }];
  },

  skills: () => [
    { text: '# tech stack', cls: 'green' },
    { text: '' },
    { text: 'Backend', cls: 'yellow' },
    { text: '  Java (Spring Boot)  ████████████  expert' },
    { text: '  Node.js & Express   ██████████░░  proficient' },
    { text: '  Python / Pandas     ████████░░░░  proficient' },
    { text: '  PostgreSQL          ████████░░░░  proficient' },
    { text: '  Docker              ██████████░░  proficient' },
    { text: '' },
    { text: 'Web', cls: 'yellow' },
    { text: '  React.js & Hooks    ████████████  expert' },
    { text: '  TypeScript          ██████████░░  proficient' },
    { text: '  SCSS / Responsive   ████████░░░░  proficient' },
    { text: '' },
    { text: 'Infrastructure', cls: 'yellow' },
    { text: '  Linux               ████████████  expert' },
    { text: '  Firewall / SSL/TLS  ██████████░░  proficient' },
    { text: '  CI/CD Pipelines     ██████████░░  proficient' },
    { text: '  Scripting / Bash    ████████░░░░  proficient' },
  ],

  'git log': () => [
    { text: 'commit a3f9c1e  (HEAD -> main)', cls: 'yellow' },
    { text: 'Author: Bram Peerdeman <brampeer15@gmail.com>', cls: 'muted' },
    { text: 'Date:   2024 — Present', cls: 'muted' },
    { text: '' },
    { text: '    feat: pursuing HBO Software Engineering @ De Haagse Hogeschool' },
    { text: '' },
    { text: 'commit 7b2e8d4', cls: 'yellow' },
    { text: 'Date:   2024 — 2025', cls: 'muted' },
    { text: '' },
    { text: '    role: DevOps Engineer @ SocyList' },
    { text: '    - managed CI/CD pipelines and infrastructure' },
    { text: '    - automated deployment workflows at scale' },
    { text: '' },
    { text: 'commit 4c1f3a9', cls: 'yellow' },
    { text: 'Date:   2023 — 2024', cls: 'muted' },
    { text: '' },
    { text: '    role: Intern Software Developer @ SocyList' },
    { text: '    - built automated website scanner (TypeScript + Playwright)' },
    { text: '' },
    { text: 'commit 1a0b2c8', cls: 'yellow' },
    { text: 'Date:   2021 — 2024', cls: 'muted' },
    { text: '' },
    { text: '    feat: MBO Software Developer @ Grafisch Lyceum' },
    { text: '    - first compile. hello world.' },
  ],

  'docker ps': () => [
    { text: 'CONTAINER ID   IMAGE                  STATUS       NAME', cls: 'green' },
    { text: 'a1b2c3d4e5f6   bram/brain:latest      Up 23 years  brain' },
    { text: 'b2c3d4e5f6a1   bram/creativity:1.0    Up 23 years  creativity' },
    { text: 'c3d4e5f6a1b2   bram/coffee:stable     Up ∞ hours   caffeine' },
    { text: 'd4e5f6a1b2c3   postgres:15            Up 2 years   knowledge-db' },
    { text: 'e5f6a1b2c3d4   nginx:alpine           Up always    portfolio' },
    { text: 'f6a1b2c3d4e5   jenkins:lts            Up 1 year    ci-cd-pipeline' },
    { text: '' },
    { text: '6 containers running. 0 unhealthy.', cls: 'muted' },
  ],

  neofetch: () => [
    { text: '        ██████        bram@portfolio.dev', cls: 'cyan' },
    { text: '      ████████        ------------------', cls: 'cyan' },
    { text: '    ██████████        OS: Delft Linux 23.04 LTS', cls: 'cyan' },
    { text: '   ████  ██████       Host: De Haagse Hogeschool', cls: 'cyan' },
    { text: '  ████    ██████      Kernel: Coffee-powered 6.1.0', cls: 'cyan' },
    { text: '  ████    ██████      Uptime: 23 years, 0 crashes', cls: 'cyan' },
    { text: '  ████████████        Packages: Java, Node, React, Docker, Linux', cls: 'cyan' },
    { text: '   ████████████       Shell: bash (with strong opinions)', cls: 'cyan' },
    { text: '     ██████████       Resolution: Problem → Solution', cls: 'cyan' },
    { text: '       ████████       DE: Star Wars (custom)', cls: 'cyan' },
    { text: '         ██████       Terminal: This one, right now', cls: 'cyan' },
    { text: '                      Memory: 4 languages, 10+ projects' },
    { text: '                      Disk: Still learning' },
  ],

  whoami: () => [
    { text: 'visitor', cls: 'muted' },
    { text: 'uid=1000(visitor) gid=1000(visitor)', cls: 'muted' },
    { text: '' },
    { text: "You're browsing the portfolio of Bram Peerdeman.", cls: 'muted' },
    { text: "Type 'ls' to look around.", cls: 'muted' },
  ],

  contact: () => COMMANDS.cat(['contact.txt']),

  'ping bram': () => [
    { text: 'PING brampeer15@gmail.com: 56 data bytes' },
    { text: '64 bytes from bram: seq=0 ttl=64 time=<24h ms', cls: 'green' },
    { text: '64 bytes from bram: seq=1 ttl=64 time=<24h ms', cls: 'green' },
    { text: '64 bytes from bram: seq=2 ttl=64 time=<24h ms', cls: 'green' },
    { text: '' },
    { text: '3 packets transmitted, 3 received, 0% packet loss', cls: 'green' },
    { text: '' },
    { text: 'Bram is reachable at brampeer15@gmail.com', cls: 'muted' },
  ],

  'sudo hire-me': () => [
    { text: '[sudo] password for visitor: ', cls: 'yellow' },
    { text: '' },
    { text: 'Executing hire-me...', cls: 'green' },
    { text: '' },
    { text: '  Checking skills...........  PASS (10+ projects, 2+ years exp.)' },
    { text: '  Checking attitude.........  PASS (continuous learner)' },
    { text: '  Checking coffee intake....  PASS (∞ cups / day)' },
    { text: '  Running background check..  PASS (Delft, NL — clean record)' },
    { text: '' },
    { text: 'All checks passed. Welcome to the team.', cls: 'green' },
    { text: 'Next step: brampeer15@gmail.com', cls: 'muted' },
  ],

  clear: () => '__CLEAR__',
};

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [lines, setLines] = useState<Line[]>(BOOT);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);

  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  // ── Open / close ──
  const openTerminal = useCallback(() => {
    setOpen(true);
    setClosing(false);
    setTimeout(() => inputRef.current?.focus(), 60);
  }, []);

  const closeTerminal = useCallback(() => {
    setClosing(true);
    setTimeout(() => { setOpen(false); setClosing(false); }, 180);
  }, []);

  // ── Global ` key listener ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '`') {
        e.preventDefault();
        if (open) closeTerminal(); else openTerminal();
      }
      if (e.key === 'Escape' && open) closeTerminal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, openTerminal, closeTerminal]);

  // ── Scroll to bottom on new output ──
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  // ── Run a command ──
  const run = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;

    setCmdHistory(prev => [...prev, cmd]);
    setHistIdx(-1);

    // Echo the prompt + command
    const promptLine: Line = { text: `visitor@bram:~$ ${cmd}` };

    const key = cmd.toLowerCase();
    const handler = COMMANDS[key] ?? (() => {
      const [verb, ...rest] = cmd.split(' ');
      return COMMANDS[verb.toLowerCase()]?.(rest)
        ?? [
            { text: `bash: ${cmd}: command not found`, cls: 'red' as const },
            { text: "Type 'help' for available commands.", cls: 'muted' as const },
          ];
    });

    const result = handler(cmd.split(' ').slice(1));

    if (result === '__CLEAR__') {
      setLines([]);
      return;
    }

    setLines(prev => [...prev, promptLine, ...result, { text: '' }]);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      run(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistIdx(prev => {
        const next = Math.min(prev + 1, cmdHistory.length - 1);
        setInput(cmdHistory[cmdHistory.length - 1 - next] ?? '');
        return next;
      });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistIdx(prev => {
        const next = prev - 1;
        if (next < 0) { setInput(''); return -1; }
        setInput(cmdHistory[cmdHistory.length - 1 - next] ?? '');
        return next;
      });
    }
  };

  if (!open) return null;

  return (
    <div
      className={`terminal-backdrop${closing ? ' closing' : ''}`}
      onMouseDown={(e) => { if (e.target === e.currentTarget) closeTerminal(); }}
    >
      <div className="terminal-window">

        {/* Title bar */}
        <div className="terminal-bar">
          <div className="t-dot red"   onClick={closeTerminal} title="Close" />
          <div className="t-dot yellow" />
          <div className="t-dot green" />
          <span className="terminal-bar-title">visitor@brampeerdeman.com — bash</span>
          <span className="terminal-bar-hint">esc to close</span>
        </div>

        {/* Output */}
        <div
          className="terminal-output"
          ref={outputRef}
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={`t-line${line.cls ? ' ' + line.cls : ''}`}
            >
              {line.text || '\u00A0'}
            </div>
          ))}
        </div>

        {/* Input row */}
        <div className="terminal-prompt-row">
          <span className="t-prompt-label">visitor@bram:~$&nbsp;</span>
          <input
            ref={inputRef}
            className="t-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            autoComplete="off"
            spellCheck={false}
            autoFocus
          />
        </div>

      </div>
    </div>
  );
}
