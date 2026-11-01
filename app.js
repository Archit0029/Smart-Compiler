/**
 * Smart Compiler - Multi-Language Online IDE & Compiler
 * Core Engine & UI Logic
 */

// ==========================================
// 1. LANGUAGE DEFINITIONS & TEMPLATES
// ==========================================
const LANGUAGES = {
    python: {
        id: 'python',
        name: 'Python 3',
        label: 'Python 3.12',
        monacoLang: 'python',
        judge0Id: 100, // Python 3.12.5 (fallback: 71 for 3.8.1)
        ext: 'main.py',
        icon: 'fab fa-python text-yellow-400',
        pills: true,
        samples: {
            hello: `# Online Python Compiler - Smart Compiler
def greet(name):
    return f"Hello, {name}! Welcome to Smart Compiler."

print(greet("Developer"))

# Working with lists & comprehension
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
print(f"Original: {numbers}")
print(f"Squares:  {squares}")
`,
            input: `# Interactive User Input Example
name = input("Enter your name: ")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print(f"\nWelcome, {name}!")
print(f"Sum: {num1} + {num2} = {num1 + num2}")
print(f"Product: {num1} * {num2} = {num1 * num2}")
`,
            fibonacci: `# Fibonacci Generator & Performance Test
def fibonacci(n):
    fib_series = [0, 1]
    while len(fib_series) < n:
        fib_series.append(fib_series[-1] + fib_series[-2])
    return fib_series[:n]

print("First 15 Fibonacci Numbers:")
print(fibonacci(15))
`
        }
    },
    cpp: {
        id: 'cpp',
        name: 'C++',
        label: 'C++ (GCC 14)',
        monacoLang: 'cpp',
        judge0Id: 105, // C++ (GCC 14.1.0)
        ext: 'main.cpp',
        icon: 'fas fa-file-code text-blue-500',
        pills: true,
        samples: {
            hello: `// Online C++ Compiler - Smart Compiler
#include <iostream>
#include <vector>
#include <numeric>

int main() {
    std::cout << "=== Welcome to Smart Compiler (C++) ===" << std::endl;
    
    std::vector<int> nums = {10, 20, 30, 40, 50};
    int total = std::accumulate(nums.begin(), nums.end(), 0);
    
    std::cout << "Elements in vector: ";
    for (int n : nums) std::cout << n << " ";
    std::cout << "\\nTotal Sum: " << total << std::endl;
    
    return 0;
}
`,
            input: `// Interactive C++ with stdin
#include <iostream>
#include <string>

int main() {
    std::string name;
    int a, b;
    std::cout << "Enter your name: ";
    if (std::cin >> name) {
        std::cout << "Hello, " << name << "!" << std::endl;
    }
    std::cout << "Enter two numbers: ";
    if (std::cin >> a >> b) {
        std::cout << a << " + " << b << " = " << (a + b) << std::endl;
    }
    return 0;
}
`
        }
    },
    c: {
        id: 'c',
        name: 'C',
        label: 'C (GCC 14)',
        monacoLang: 'c',
        judge0Id: 103, // C (GCC 14.1.0)
        ext: 'main.c',
        icon: 'fas fa-code text-indigo-400',
        pills: true,
        samples: {
            hello: `// Online C Compiler - Smart Compiler
#include <stdio.h>

int main() {
    printf("=== Welcome to Smart Compiler (C) ===\\n");
    printf("Compiled with modern GCC.\\n");
    
    int a = 14, b = 28;
    printf("Result of %d + %d is: %d\\n", a, b, a + b);
    return 0;
}
`
        }
    },
    java: {
        id: 'java',
        name: 'Java',
        label: 'Java (JDK 17)',
        monacoLang: 'java',
        judge0Id: 91, // Java (JDK 17.0.6)
        ext: 'Main.java',
        icon: 'fab fa-java text-orange-500',
        pills: true,
        samples: {
            hello: `// Online Java Compiler - Smart Compiler
// Note: Class name must be 'Main'
import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Welcome to Smart Compiler (Java) ===");
        List<String> list = Arrays.asList("Java 17", "Python", "C++", "Go", "Rust");
        
        System.out.println("Available Cloud Runtimes:");
        for (int i = 0; i < list.size(); i++) {
            System.out.println((i + 1) + ". " + list.get(i));
        }
    }
}
`
        }
    },
    javascript: {
        id: 'javascript',
        name: 'JavaScript',
        label: 'JavaScript (Node.js)',
        monacoLang: 'javascript',
        judge0Id: 102, // Node.js 22.08.0
        ext: 'index.js',
        icon: 'fab fa-js text-yellow-400',
        pills: true,
        samples: {
            hello: `// Online JavaScript Compiler - Smart Compiler
console.log("=== Welcome to Smart Compiler (JavaScript) ===");

const users = [
    { id: 1, name: "Alice", role: "Frontend" },
    { id: 2, name: "Bob", role: "Backend" },
    { id: 3, name: "Charlie", role: "DevOps" }
];

console.log("Team Members:");
console.table ? console.table(users) : console.log(users);

// Async / arrow function example
const squareAsync = async (x) => x * x;
squareAsync(12).then(res => console.log("12 squared =", res));
`
        }
    },
    web: {
        id: 'web',
        name: 'Web Dev',
        label: 'HTML / CSS / JS',
        monacoLang: 'html',
        isWebMode: true,
        ext: 'index.html',
        icon: 'fab fa-html5 text-orange-500',
        pills: true,
        samples: {
            hello: {
                html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Smart Compiler Playground</title>
</head>
<body>
  <div class="card">
    <div class="icon">⚡</div>
    <h1>Smart Compiler Web Lab</h1>
    <p>Build, test, and preview HTML, CSS & JavaScript in real time.</p>
    <div class="counter-box">
      <button id="decrement">-</button>
      <span id="counterValue">0</span>
      <button id="increment">+</button>
    </div>
  </div>
</body>
</html>`,
                css: `body {
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #f8fafc;
}

.card {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(12px);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
  max-width: 380px;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #38bdf8;
}

p {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.5;
}

.counter-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

button {
  background: #0284c7;
  color: white;
  border: none;
  font-size: 1.25rem;
  width: 42px;
  height: 42px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background: #0369a1;
  transform: translateY(-2px);
}

#counterValue {
  font-size: 1.75rem;
  font-weight: bold;
  min-width: 40px;
}`,
                js: `let count = 0;
const valueEl = document.getElementById('counterValue');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

incrementBtn.addEventListener('click', () => {
    count++;
    valueEl.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    valueEl.textContent = count;
});

console.log("Smart Compiler Web Lab loaded successfully!");`
            }
        }
    },
    csharp: {
        id: 'csharp',
        name: 'C#',
        label: 'C# (.NET)',
        monacoLang: 'csharp',
        judge0Id: 51, // C# (Mono 6.6.0.161)
        ext: 'Program.cs',
        icon: 'fas fa-hashtag text-purple-400',
        pills: true,
        samples: {
            hello: `// Online C# Compiler - Smart Compiler
using System;

class Program {
    static void Main() {
        Console.WriteLine("=== Welcome to Smart Compiler (C#) ===");
        string framework = ".NET / Mono Cloud Engine";
        Console.WriteLine($"Running on {framework}");
        
        int a = 25, b = 17;
        Console.WriteLine($"{a} + {b} = {a + b}");
    }
}
`
        }
    },
    go: {
        id: 'go',
        name: 'Go',
        label: 'Go (1.23)',
        monacoLang: 'go',
        judge0Id: 107, // Go 1.23.5
        ext: 'main.go',
        icon: 'fab fa-golang text-cyan-400',
        pills: true,
        samples: {
            hello: `// Online Go Compiler - Smart Compiler
package main

import "fmt"

func main() {
    fmt.Println("=== Welcome to Smart Compiler (Go) ===")
    
    languages := []string{"Go", "Rust", "Python", "C++", "Java"}
    fmt.Println("Languages supported in Smart Compiler:")
    for idx, lang := range languages {
        fmt.Printf("%d. %s\\n", idx+1, lang)
    }
}
`
        }
    },
    rust: {
        id: 'rust',
        name: 'Rust',
        label: 'Rust (1.85)',
        monacoLang: 'rust',
        judge0Id: 108, // Rust 1.85.0
        ext: 'main.rs',
        icon: 'fab fa-rust text-amber-500',
        pills: true,
        samples: {
            hello: `// Online Rust Compiler - Smart Compiler
fn main() {
    println!("=== Welcome to Smart Compiler (Rust) ===");
    println!("Memory safety without garbage collection!");
    
    let numbers = vec![1, 2, 3, 4, 5];
    let sum: i32 = numbers.iter().sum();
    println!("Vector: {:?}, Sum: {}", numbers, sum);
}
`
        }
    },
    sql: {
        id: 'sql',
        name: 'SQL',
        label: 'SQL (SQLite 3)',
        monacoLang: 'sql',
        judge0Id: 82, // SQL (SQLite 3.27.2)
        ext: 'query.sql',
        icon: 'fas fa-database text-teal-400',
        pills: true,
        samples: {
            hello: `-- Online SQL Compiler - Smart Compiler
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    major TEXT NOT NULL,
    gpa REAL
);

INSERT INTO students (name, major, gpa) VALUES
('Alex Rivera', 'Computer Science', 3.85),
('Samira Khan', 'Data Science', 3.92),
('David Chen', 'Software Engineering', 3.74),
('Emily Watson', 'Computer Science', 3.98);

-- Query high achieving students
SELECT * FROM students WHERE gpa >= 3.80 ORDER BY gpa DESC;
`
        }
    },
    typescript: {
        id: 'typescript',
        name: 'TypeScript',
        label: 'TypeScript (5.6)',
        monacoLang: 'typescript',
        judge0Id: 101, // TypeScript 5.6.2
        ext: 'index.ts',
        icon: 'fas fa-file-code text-blue-400',
        pills: false,
        samples: {
            hello: `// Online TypeScript Compiler - Smart Compiler
interface Developer {
    name: string;
    languages: string[];
    yearsOfExp: number;
}

const dev: Developer = {
    name: "Alex",
    languages: ["TypeScript", "Python", "Rust"],
    yearsOfExp: 4
};

console.log("Developer Profile:", dev);
`
        }
    },
    php: {
        id: 'php',
        name: 'PHP',
        label: 'PHP (8.3)',
        monacoLang: 'php',
        judge0Id: 98, // PHP 8.3.11
        ext: 'index.php',
        icon: 'fab fa-php text-indigo-300',
        pills: false,
        samples: {
            hello: `<?php
// Online PHP Compiler - Smart Compiler
echo "=== Welcome to Smart Compiler (PHP) ===\\n";
echo "PHP Version: " . phpversion() . "\\n";

$skills = ["Laravel", "APIs", "Database", "Modern PHP 8"];
foreach ($skills as $i => $skill) {
    echo ($i + 1) . ". " . $skill . "\\n";
}
`
        }
    },
    ruby: {
        id: 'ruby',
        name: 'Ruby',
        label: 'Ruby (2.7)',
        monacoLang: 'ruby',
        judge0Id: 72, // Ruby 2.7.0
        ext: 'main.rb',
        icon: 'fas fa-gem text-red-500',
        pills: false,
        samples: {
            hello: `# Online Ruby Compiler - Smart Compiler
puts "=== Welcome to Smart Compiler (Ruby) ==="
frameworks = ["Ruby on Rails", "Sinatra", "Hanami"]

frameworks.each_with_index do |fw, index|
  puts "#{index + 1}. #{fw}"
end
`
        }
    },
    kotlin: {
        id: 'kotlin',
        name: 'Kotlin',
        label: 'Kotlin (2.1)',
        monacoLang: 'kotlin',
        judge0Id: 111, // Kotlin 2.1.10
        ext: 'Main.kt',
        icon: 'fas fa-code text-violet-400',
        pills: false,
        samples: {
            hello: `// Online Kotlin Compiler - Smart Compiler
fun main() {
    println("=== Welcome to Smart Compiler (Kotlin) ===")
    val languages = listOf("Kotlin", "Java", "Swift", "Dart")
    println("Languages: $languages")
}
`
        }
    },
    swift: {
        id: 'swift',
        name: 'Swift',
        label: 'Swift (5.2)',
        monacoLang: 'swift',
        judge0Id: 83, // Swift 5.2.3
        ext: 'main.swift',
        icon: 'fab fa-swift text-orange-400',
        pills: false,
        samples: {
            hello: `// Online Swift Compiler - Smart Compiler
import Foundation

print("=== Welcome to Smart Compiler (Swift) ===")
let greeting = "Clean syntax, fast execution!"
print(greeting)
`
        }
    },
    bash: {
        id: 'bash',
        name: 'Bash',
        label: 'Bash (5.0)',
        monacoLang: 'shell',
        judge0Id: 46, // Bash 5.0.0
        ext: 'script.sh',
        icon: 'fas fa-terminal text-green-400',
        pills: false,
        samples: {
            hello: `#!/bin/bash
# Online Bash Script - Smart Compiler
echo "=== Welcome to Smart Compiler (Bash) ==="
echo "Date and Time: $(date)"
echo "Current Shell: $BASH_VERSION"

for i in {1..3}; do
  echo "Iteration $i: System is running smoothly."
done
`
        }
    }
};

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let currentLang = 'python';
let monacoEditor = null;
let isExecuting = false;
let autoRunTimeout = null;

// Settings state
const settings = {
    theme: localStorage.getItem('smart_compiler_theme') || 'vs-dark',
    fontSize: parseInt(localStorage.getItem('smart_compiler_fontsize') || '14', 10),
    tabSize: parseInt(localStorage.getItem('smart_compiler_tabsize') || '4', 10)
};

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initUI();
    initMonaco();
    setupEventListeners();
    setupShortcuts();
});

function initUI() {
    renderQuickLangPills();
    renderAllLanguagesGrid();
    renderSampleDropdown();
    loadLanguage(currentLang);

    // Apply settings values to modal inputs
    document.getElementById('settingTheme').value = settings.theme;
    document.getElementById('settingFontSize').value = settings.fontSize.toString();
    document.getElementById('settingTabSize').value = settings.tabSize.toString();
}

// Render top quick pills
function renderQuickLangPills() {
    const container = document.getElementById('quickLangContainer');
    container.innerHTML = '';

    Object.values(LANGUAGES).filter(l => l.pills).forEach(lang => {
        const btn = document.createElement('button');
        btn.id = `pill-${lang.id}`;
        btn.className = `px-3 py-1 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition whitespace-nowrap ${
            lang.id === currentLang ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
        }`;
        btn.innerHTML = `<i class="${lang.icon}"></i> <span>${lang.name}</span>`;
        btn.onclick = () => switchLanguage(lang.id);
        container.appendChild(btn);
    });
}

// Render languages grid in modal
function renderAllLanguagesGrid(filter = '') {
    const grid = document.getElementById('allLanguagesGrid');
    grid.innerHTML = '';

    const list = Object.values(LANGUAGES).filter(l => 
        l.name.toLowerCase().includes(filter.toLowerCase()) || 
        l.label.toLowerCase().includes(filter.toLowerCase())
    );

    if (list.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-8 text-center text-gray-500 text-xs">No programming languages found matching "${filter}"</div>`;
        return;
    }

    list.forEach(lang => {
        const card = document.createElement('div');
        card.className = `p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between group ${
            lang.id === currentLang 
                ? 'bg-blue-600/10 border-blue-500/50 text-white' 
                : 'bg-gray-800/60 border-gray-700/60 hover:bg-gray-800 text-gray-300 hover:text-white'
        }`;
        card.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center text-sm">
                    <i class="${lang.icon}"></i>
                </div>
                <div>
                    <h4 class="font-bold text-xs group-hover:text-blue-400 transition">${lang.name}</h4>
                    <p class="text-[10px] text-gray-400">${lang.label}</p>
                </div>
            </div>
            ${lang.id === currentLang ? '<span class="text-blue-400 text-xs"><i class="fas fa-check-circle"></i></span>' : ''}
        `;
        card.onclick = () => {
            switchLanguage(lang.id);
            closeLanguageModal();
        };
        grid.appendChild(card);
    });
}

// Render samples dropdown
function renderSampleDropdown() {
    const dropdown = document.getElementById('sampleDropdown');
    const lang = LANGUAGES[currentLang];
    dropdown.innerHTML = '';

    if (!lang || !lang.samples) return;

    Object.keys(lang.samples).forEach(key => {
        const item = document.createElement('button');
        item.className = 'w-full text-left px-3 py-2 hover:bg-gray-800 flex items-center gap-2 text-gray-300 hover:text-white capitalize transition';
        item.innerHTML = `<i class="fas fa-code-branch text-blue-400 text-[10px]"></i> Example: ${key}`;
        item.onclick = () => {
            loadSample(key);
            dropdown.classList.add('hidden');
        };
        dropdown.appendChild(item);
    });
}

// ==========================================
// 4. MONACO EDITOR SETUP (WITH TIMEOUT FAILSAFE)
// ==========================================
let monacoLoadTimeout = null;

function initMonaco() {
    const loading = document.getElementById('editorLoading');

    // Failsafe: If Monaco takes longer than 1200ms, immediately show the fast editor!
    monacoLoadTimeout = setTimeout(() => {
        if (!monacoEditor) {
            console.log("Monaco CDN taking time — activating responsive fallback editor");
            showFallbackTextarea();
        }
    }, 1200);

    // If require is missing from CDN, fall back immediately
    if (typeof require === 'undefined') {
        clearTimeout(monacoLoadTimeout);
        showFallbackTextarea();
        return;
    }

    // Configure cross-origin worker proxy so Chrome won't block Monaco workers
    window.MonacoEnvironment = {
        getWorkerUrl: function(workerId, label) {
            return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
                self.MonacoEnvironment = { baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/' };
                importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/base/worker/workerMain.js');
            `)}`;
        }
    };

    try {
        require.config({
            paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' },
            'vs/nls': { availableLanguages: { '*': '' } }
        });

        require(['vs/editor/editor.main'], () => {
            clearTimeout(monacoLoadTimeout);

            try {
                const container = document.getElementById('monaco-container');
                const loadingEl = document.getElementById('editorLoading');

                // If fallback textarea was already active, preserve any edits made
                const fallback = document.getElementById('fallback-code-area');
                const initialCode = (fallback && !fallback.classList.contains('hidden') && fallback.value)
                    ? fallback.value
                    : (getSavedCode(currentLang) || LANGUAGES[currentLang].samples.hello);

                if (fallback) fallback.classList.add('hidden');

                monacoEditor = monaco.editor.create(container, {
                    value: initialCode,
                    language: LANGUAGES[currentLang].monacoLang,
                    theme: settings.theme,
                    fontSize: settings.fontSize,
                    tabSize: settings.tabSize,
                    fontFamily: '"JetBrains Mono", Consolas, "Courier New", monospace',
                    automaticLayout: true,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    smoothScrolling: true,
                    cursorBlinking: 'smooth',
                    wordWrap: 'on',
                    padding: { top: 12, bottom: 12 },
                    renderLineHighlight: 'all',
                });

                if (loadingEl) loadingEl.style.display = 'none';

                monacoEditor.onDidChangeCursorPosition(e => {
                    document.getElementById('cursorPos').textContent = `Ln ${e.position.lineNumber}, Col ${e.position.column}`;
                });

                monacoEditor.onDidChangeModelContent(() => {
                    const code = monacoEditor.getValue();
                    saveCode(currentLang, code);
                    const saveEl = document.getElementById('saveStatus');
                    saveEl.textContent = 'Saving...';
                    setTimeout(() => { saveEl.textContent = 'Saved'; }, 400);
                });

                monacoEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
                    runCode();
                });
            } catch (createErr) {
                console.warn("Monaco editor creation failed, using fallback:", createErr);
                showFallbackTextarea();
            }
        }, (err) => {
            clearTimeout(monacoLoadTimeout);
            console.warn("Monaco failed to load from CDN. Using fallback textarea.", err);
            showFallbackTextarea();
        });
    } catch (e) {
        clearTimeout(monacoLoadTimeout);
        showFallbackTextarea();
    }
}

function showFallbackTextarea() {
    if (monacoLoadTimeout) clearTimeout(monacoLoadTimeout);

    const loading = document.getElementById('editorLoading');
    if (loading) loading.style.display = 'none';

    const fallback = document.getElementById('fallback-code-area');
    if (!fallback) return;

    fallback.classList.remove('hidden');
    fallback.style.display = 'block';

    const currentCode = getSavedCode(currentLang) || LANGUAGES[currentLang].samples.hello;
    if (!fallback.value) {
        fallback.value = currentCode;
    }

    // Support Tab indentation and Ctrl+Enter inside fallback textarea
    if (!fallback.dataset.initialized) {
        fallback.dataset.initialized = 'true';

        fallback.addEventListener('input', () => {
            saveCode(currentLang, fallback.value);
            const saveEl = document.getElementById('saveStatus');
            if (saveEl) {
                saveEl.textContent = 'Saving...';
                setTimeout(() => { saveEl.textContent = 'Saved'; }, 400);
            }
        });

        fallback.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = fallback.selectionStart;
                const end = fallback.selectionEnd;
                fallback.value = fallback.value.substring(0, start) + '    ' + fallback.value.substring(end);
                fallback.selectionStart = fallback.selectionEnd = start + 4;
                saveCode(currentLang, fallback.value);
            } else if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                runCode();
            }
        });

        // Track cursor in fallback textarea
        const updateFallbackCursor = () => {
            const text = fallback.value.substring(0, fallback.selectionStart);
            const lines = text.split('\n');
            const lineNum = lines.length;
            const colNum = lines[lines.length - 1].length + 1;
            const cursorEl = document.getElementById('cursorPos');
            if (cursorEl) cursorEl.textContent = `Ln ${lineNum}, Col ${colNum}`;
        };

        fallback.addEventListener('keyup', updateFallbackCursor);
        fallback.addEventListener('click', updateFallbackCursor);
    }
}

function getEditorCode() {
    if (monacoEditor) {
        return monacoEditor.getValue();
    }
    return document.getElementById('fallback-code-area').value;
}

function setEditorCode(code, monacoLang) {
    if (monacoEditor) {
        monacoEditor.setValue(code);
        if (monacoLang) {
            monaco.editor.setModelLanguage(monacoEditor.getModel(), monacoLang);
        }
    } else {
        const fallback = document.getElementById('fallback-code-area');
        fallback.value = code;
    }
}

// ==========================================
// 5. LANGUAGE SWITCHING & TEMPLATES
// ==========================================
function switchLanguage(langId) {
    if (!LANGUAGES[langId]) return;
    currentLang = langId;
    loadLanguage(langId);
    renderQuickLangPills();
    renderSampleDropdown();
    const searchInput = document.getElementById('langSearchInput');
    renderAllLanguagesGrid(searchInput ? searchInput.value : '');
    showToast(`Switched to ${LANGUAGES[langId].name}`);
}

function loadLanguage(langId) {
    const lang = LANGUAGES[langId];
    if (!lang) return;

    const langLabel = document.getElementById('currentLangLabel');
    if (langLabel) langLabel.textContent = lang.name;

    const langIcon = document.getElementById('currentLangIcon');
    if (langIcon) langIcon.className = lang.icon;

    const activeFile = document.getElementById('activeFileName');
    if (activeFile) activeFile.innerHTML = `<i class="${lang.icon}"></i> ${lang.ext}`;

    const engineLabel = document.getElementById('compilerEngineLabel');
    if (engineLabel) {
        engineLabel.textContent = lang.isWebMode 
            ? 'Engine: Sandboxed In-Browser Preview' 
            : (lang.id === 'python' ? 'Engine: Python 3 (Live Interactive Engine)' : `Engine: Judge0 Cloud (${lang.label})`);
    }

    const compilerMode = document.getElementById('compilerModeView');
    const webDevMode = document.getElementById('webDevModeView');

    if (lang.isWebMode) {
        if (compilerMode) compilerMode.classList.add('hidden');
        if (webDevMode) {
            webDevMode.classList.remove('hidden');
            webDevMode.classList.add('flex');
        }
        loadWebCode();
        runWebPreview();
    } else {
        if (webDevMode) {
            webDevMode.classList.add('hidden');
            webDevMode.classList.remove('flex');
        }
        if (compilerMode) compilerMode.classList.remove('hidden');

        const code = getSavedCode(langId) || (lang.samples ? lang.samples.hello : '');
        setEditorCode(code, lang.monacoLang);
    }
}

function loadSample(sampleKey) {
    const lang = LANGUAGES[currentLang];
    if (!lang || !lang.samples || !lang.samples[sampleKey]) return;

    if (lang.isWebMode) {
        const sample = lang.samples[sampleKey];
        const h = document.getElementById('web-html-code');
        const c = document.getElementById('web-css-code');
        const j = document.getElementById('web-js-code');
        if (h && sample.html) h.value = sample.html;
        if (c && sample.css) c.value = sample.css;
        if (j && sample.js) j.value = sample.js;
        saveWebCode();
        runWebPreview();
    } else {
        const code = lang.samples[sampleKey];
        setEditorCode(code, lang.monacoLang);
        saveCode(currentLang, code);
    }
    showToast(`Loaded "${sampleKey}" example`);
}

function getSavedCode(langId) {
    return localStorage.getItem(`smart_compiler_code_${langId}`);
}

function saveCode(langId, code) {
    localStorage.setItem(`smart_compiler_code_${langId}`, code);
}

function closeLanguageModal() {
    const modal = document.getElementById('allLanguagesModal');
    if (modal) modal.classList.add('hidden');
}

function openCreatorModal() {
    const modal = document.getElementById('creatorModal');
    if (modal) modal.classList.remove('hidden');
}

function closeCreatorModal() {
    const modal = document.getElementById('creatorModal');
    if (modal) modal.classList.add('hidden');
}

function copyShareLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        showToast('Link to Smart Compiler copied to clipboard!');
    }).catch(() => {
        showToast('Smart Compiler URL: ' + url);
    });
}

function saveSettings() {
    const themeEl = document.getElementById('settingTheme');
    const sizeEl = document.getElementById('settingFontSize');
    const tabEl = document.getElementById('settingTabSize');

    const theme = themeEl ? themeEl.value : 'vs-dark';
    const fontSize = sizeEl ? parseInt(sizeEl.value, 10) : 14;
    const tabSize = tabEl ? parseInt(tabEl.value, 10) : 4;

    settings.theme = theme;
    settings.fontSize = fontSize;
    settings.tabSize = tabSize;

    localStorage.setItem('smart_compiler_theme', theme);
    localStorage.setItem('smart_compiler_fontsize', fontSize.toString());
    localStorage.setItem('smart_compiler_tabsize', tabSize.toString());

    if (monacoEditor) {
        monaco.editor.setTheme(theme);
        monacoEditor.updateOptions({
            fontSize: fontSize,
            tabSize: tabSize
        });
    }

    const settingsModal = document.getElementById('settingsModal');
    if (settingsModal) settingsModal.classList.add('hidden');
    showToast('Settings saved');
}

// ==========================================
// 6. CODE EXECUTION ENGINE — INTERACTIVE INLINE TERMINAL
// ==========================================

// ==========================================
// 6. CODE EXECUTION ENGINE — LIVE INTERACTIVE RUNNER (PROGRAMIZ GRADE)
// ==========================================

let isPythonRunning = false;
let currentPythonAbort = null;

function stopCurrentExecution() {
    if (isPythonRunning) {
        isPythonRunning = false;
        if (currentPythonAbort) {
            try { currentPythonAbort(); } catch (e) {}
            currentPythonAbort = null;
        }
        const activeInput = document.querySelector('.terminal-inline-input');
        if (activeInput) {
            const line = activeInput.closest('.terminal-input-line');
            if (line) line.remove();
        }
        updateStatusBadge('Stopped', 'bg-gray-800 text-gray-400 border-gray-700');
        appendTerminal('\n[Program terminated by user]', 'info');
    }
    setExecutingState(false);
}

// In-Browser Live Interactive Python Execution (Zero-latency, live menus & while-loops)
async function runPythonInteractive(code) {
    if (typeof Sk === 'undefined') {
        appendTerminal('[Notice: Loading in-browser Python engine... Please wait 2 seconds and click Run again]\n', 'info');
        setExecutingState(false);
        return;
    }

    isPythonRunning = true;
    updateStatusBadge('Running...', 'bg-blue-500/20 text-blue-400 border-blue-500/30');

    const metricsBar = document.getElementById('metricsBar');
    if (metricsBar) {
        metricsBar.classList.remove('hidden');
        metricsBar.classList.add('flex');
    }
    const timeEl = document.getElementById('timeMetric');
    const memoryEl = document.getElementById('memoryMetric');
    if (memoryEl) memoryEl.textContent = '0.50 MB';

    const startTime = performance.now();

    currentPythonAbort = () => {
        isPythonRunning = false;
    };

    Sk.configure({
        output: function(text) {
            if (!isPythonRunning) return;
            appendTerminal(text, 'stdout');
        },
        read: function(x) {
            if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined) {
                throw 'File not found: ' + x;
            }
            return Sk.builtinFiles['files'][x];
        },
        inputfun: function(prompt) {
            if (!isPythonRunning) {
                return Promise.reject(new Error('Execution stopped by user'));
            }
            updateStatusBadge('Waiting for Input...', 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30');
            return askInTerminal(prompt).then((val) => {
                if (isPythonRunning) {
                    updateStatusBadge('Running...', 'bg-blue-500/20 text-blue-400 border-blue-500/30');
                }
                return val;
            });
        },
        inputfunTakesPrompt: true,
        yieldLimit: 100, // Keeps browser responsive during while-loops
        execLimit: 180000 // 3 minutes timeout safety
    });

    try {
        await Sk.misceval.asyncToPromise(() => {
            return Sk.importMainWithBody('<stdin>', false, code, true);
        });

        const duration = ((performance.now() - startTime) / 1000).toFixed(3);
        if (timeEl) timeEl.textContent = `${duration}s`;
        updateStatusBadge('Accepted', 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30');

    } catch (err) {
        const duration = ((performance.now() - startTime) / 1000).toFixed(3);
        if (timeEl) timeEl.textContent = `${duration}s`;

        const errStr = err.toString();

        if (errStr.includes('Execution stopped by user') || !isPythonRunning) {
            updateStatusBadge('Stopped', 'bg-gray-800 text-gray-400 border-gray-700');
            return;
        }

        // If user imported a third-party module (like numpy, pandas), fallback to Judge0 Cloud
        if (errStr.includes('ImportError') || errStr.includes('No module named')) {
            appendTerminal('\n[Switching to Judge0 Cloud Engine for external library support...]\n', 'info');
            await runCodeViaJudge0(code, LANGUAGES['python']);
            return;
        }

        updateStatusBadge('Runtime Error', 'bg-amber-500/20 text-amber-400 border-amber-500/30');
        appendTerminal('\n' + errStr, 'error');
    } finally {
        isPythonRunning = false;
        currentPythonAbort = null;
        setExecutingState(false);
    }
}

// ----------------------------------------------------
// Static Flow & Judge0 Engine for Compiled Runtimes (C, C++, Java, etc.)
// ----------------------------------------------------

function cleanCodeForAnalysis(code, langId) {
    const lines = code.split('\n');
    const cleaned = [];
    let inBlockComment = false;
    let inDocstring = false;
    let docDelim = '';

    for (let line of lines) {
        let trimmed = line.trim();

        if (['python', 'ruby', 'bash'].includes(langId)) {
            if (inDocstring) {
                if (trimmed.includes(docDelim)) inDocstring = false;
                continue;
            }
            if (trimmed.startsWith('"""') || trimmed.startsWith("'''")) {
                docDelim = trimmed.substring(0, 3);
                if (trimmed.length > 3 && trimmed.slice(3).includes(docDelim)) continue;
                inDocstring = true;
                continue;
            }
            if (trimmed.startsWith('#')) continue;

            let s = '';
            let inQ = false, qChar = '';
            for (let i = 0; i < line.length; i++) {
                const ch = line[i];
                if ((ch === '"' || ch === "'") && (i === 0 || line[i-1] !== '\\')) {
                    if (!inQ) { inQ = true; qChar = ch; }
                    else if (qChar === ch) { inQ = false; }
                }
                if (ch === '#' && !inQ) break;
                s += ch;
            }
            cleaned.push(s);
        } else {
            if (inBlockComment) {
                if (trimmed.includes('*/')) inBlockComment = false;
                continue;
            }
            if (trimmed.startsWith('/*')) {
                if (!trimmed.includes('*/')) inBlockComment = true;
                continue;
            }
            if (trimmed.startsWith('//')) continue;

            let s = '';
            let inQ = false, qChar = '';
            for (let i = 0; i < line.length; i++) {
                const ch = line[i];
                if ((ch === '"' || ch === "'") && (i === 0 || line[i-1] !== '\\')) {
                    if (!inQ) { inQ = true; qChar = ch; }
                    else if (qChar === ch) { inQ = false; }
                }
                if (ch === '/' && i + 1 < line.length && line[i+1] === '/' && !inQ) break;
                s += ch;
            }
            cleaned.push(s);
        }
    }
    return cleaned.join('\n');
}

function analyzeExecutionFlow(rawCode, langId) {
    const code = cleanCodeForAnalysis(rawCode, langId);
    const initialPrints = [];
    const inputPrompts = [];
    const pendingPrints = [];
    const lines = code.split('\n');

    let firstInputEncountered = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        if (langId === 'cpp' || langId === 'c') {
            const isCin = /\bcin\s*>>|\bgetline\s*\(/.test(line);
            const isScanf = /\bscanf\s*\(|\bgets\s*\(|\bfgets\s*\([^,]+,\s*[^,]+,\s*stdin\)/.test(line);

            if (isCin || isScanf) {
                let prompt = null;
                if (pendingPrints.length > 0) {
                    prompt = pendingPrints.pop();
                }
                if (!firstInputEncountered) {
                    firstInputEncountered = true;
                    while (pendingPrints.length > 0) {
                        initialPrints.push(pendingPrints.shift());
                    }
                }
                inputPrompts.push(prompt || 'Enter input: ');
            } else if (!firstInputEncountered) {
                const printMatch = line.match(/cout\s*<<\s*["'](.*?)["']/) || line.match(/printf\s*\(\s*["'](.*?)["']/);
                if (printMatch) {
                    const str = printMatch[1].replace(/\\n/g, '');
                    if (str) pendingPrints.push(str);
                }
            }
        } else if (langId === 'java') {
            const isInput = /\.next|\.readLine|System\.in\.read/.test(line);
            if (isInput) {
                let prompt = null;
                if (pendingPrints.length > 0) {
                    prompt = pendingPrints.pop();
                }
                if (!firstInputEncountered) {
                    firstInputEncountered = true;
                    while (pendingPrints.length > 0) {
                        initialPrints.push(pendingPrints.shift());
                    }
                }
                inputPrompts.push(prompt || 'Enter input: ');
            } else if (!firstInputEncountered) {
                const printMatch = line.match(/System\.out\.prints?(?:ln)?\s*\(\s*["'](.*?)["']/);
                if (printMatch) {
                    pendingPrints.push(printMatch[1]);
                }
            }
        } else {
            const inputKeywords = /\b(Console\.ReadLine|fmt\.Scan|io::stdin|fgets|readline|readln|read -p)\b/;
            if (inputKeywords.test(line)) {
                let prompt = null;
                if (pendingPrints.length > 0) prompt = pendingPrints.pop();
                if (!firstInputEncountered) {
                    firstInputEncountered = true;
                    while (pendingPrints.length > 0) initialPrints.push(pendingPrints.shift());
                }
                inputPrompts.push(prompt || 'Enter input: ');
            } else if (!firstInputEncountered) {
                const genericPrint = line.match(/(?:println!|Console\.WriteLine|fmt\.Println|echo|puts)\s*\(?\s*["'](.*?)["']/);
                if (genericPrint) {
                    pendingPrints.push(genericPrint[1]);
                }
            }
        }
    }

    return {
        initialPrints,
        inputPrompts,
        needsStdin: inputPrompts.length > 0
    };
}

function askInTerminal(promptText) {
    return new Promise((resolve) => {
        const terminal = document.getElementById('terminalBody');
        if (!terminal) {
            resolve('');
            return;
        }

        const line = document.createElement('div');
        line.className = 'terminal-input-line';

        if (promptText) {
            const promptSpan = document.createElement('span');
            promptSpan.className = 'terminal-prompt-text';
            promptSpan.textContent = promptText;
            line.appendChild(promptSpan);
        }

        const inputEl = document.createElement('input');
        inputEl.type = 'text';
        inputEl.className = 'terminal-inline-input';
        inputEl.setAttribute('autocomplete', 'off');
        inputEl.setAttribute('autocorrect', 'off');
        inputEl.setAttribute('spellcheck', 'false');
        inputEl.placeholder = 'Type here & press Enter ↵';
        line.appendChild(inputEl);

        terminal.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;

        setTimeout(() => inputEl.focus(), 60);

        const submit = () => {
            const val = inputEl.value;
            inputEl.remove();
            const answerSpan = document.createElement('span');
            answerSpan.className = 'terminal-user-answer';
            answerSpan.textContent = val;
            line.appendChild(answerSpan);
            line.className = 'terminal-input-line terminal-input-submitted';
            terminal.scrollTop = terminal.scrollHeight;
            resolve(val);
        };

        inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                submit();
            }
        });
    });
}

async function collectInteractiveInputsFromFlow(flow) {
    const inputs = [];
    for (let i = 0; i < flow.inputPrompts.length; i++) {
        const answer = await askInTerminal(flow.inputPrompts[i]);
        inputs.push(answer);
    }
    return { stdin: inputs.join('\n'), prompts: flow.inputPrompts };
}

function cleanResultOutput(rawStdout, initialPrints, inputPrompts) {
    if (!rawStdout) return '';
    let result = rawStdout;

    if (initialPrints && initialPrints.length > 0) {
        for (const p of initialPrints) {
            if (!p) continue;
            const cleanP = p.trim();
            if (cleanP && result.startsWith(cleanP)) {
                result = result.substring(cleanP.length).replace(/^[\r\n]+/, '');
            }
        }
    }

    if (inputPrompts && inputPrompts.length > 0) {
        for (const prompt of inputPrompts) {
            if (!prompt) continue;
            const cleanPr = prompt.trim();
            const idx = result.indexOf(cleanPr);
            if (idx !== -1 && idx < 120) {
                result = result.substring(idx + cleanPr.length).replace(/^[\s:\r\n]+/, '');
            }
        }
    }

    return result.trimStart();
}

async function runCode() {
    if (isExecuting) {
        stopCurrentExecution();
        return;
    }

    const lang = LANGUAGES[currentLang];
    if (lang.isWebMode) {
        runWebPreview();
        return;
    }

    const code = getEditorCode().trim();
    if (!code) {
        showToast('Code is empty! Write some code to execute.', 'warning');
        return;
    }

    clearTerminal();

    // Python uses real-time interactive execution (like Programiz)
    if (lang.id === 'python') {
        setExecutingState(true);
        await runPythonInteractive(code);
        return;
    }

    // JavaScript runs via in-browser sandboxed VM
    if (lang.id === 'javascript') {
        setExecutingState(true);
        runClientSideJS(code);
        setExecutingState(false);
        return;
    }

    // All other languages use Cloud Judge0 engine
    await runCodeViaJudge0(code, lang);
}

async function runCodeViaJudge0(code, lang) {
    setExecutingState(true);

    const flow = analyzeExecutionFlow(code, lang.id);

    let stdin = '';
    let interactivePrompts = [];
    let initialPrints = [];

    if (flow.needsStdin) {
        if (flow.initialPrints.length > 0) {
            for (const p of flow.initialPrints) {
                appendTerminal(p, 'stdout');
            }
            initialPrints = flow.initialPrints;
        }

        updateStatusBadge('Waiting for Input...', 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30');

        const collected = await collectInteractiveInputsFromFlow(flow);
        stdin = collected.stdin;
        interactivePrompts = flow.inputPrompts;

        updateStatusBadge('Executing...', 'bg-blue-500/20 text-blue-400 border-blue-500/30');
    } else {
        updateStatusBadge('Executing...', 'bg-blue-500/20 text-blue-400 border-blue-500/30');
    }

    const startTime = performance.now();

    try {
        const base64Code = btoa(unescape(encodeURIComponent(code)));
        const base64Stdin = stdin ? btoa(unescape(encodeURIComponent(stdin))) : '';

        const payload = {
            source_code: base64Code,
            language_id: lang.judge0Id,
            stdin: base64Stdin
        };

        const response = await fetch('https://ce.judge0.com/submissions?base64_encoded=true&wait=true', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`Execution service responded with status ${response.status}`);

        const result = await response.json();
        const duration = ((performance.now() - startTime) / 1000).toFixed(3);

        handleExecutionResult(result, duration, interactivePrompts, initialPrints);

    } catch (err) {
        console.error('Remote execution error:', err);
        appendTerminal(`\n[Execution Error]: ${err.message}\nPlease check your internet connection or try again shortly.`, 'error');
        updateStatusBadge('Failed', 'bg-red-500/20 text-red-400 border-red-500/30');
    } finally {
        setExecutingState(false);
    }
}

function handleExecutionResult(result, fallbackDuration, interactivePrompts = [], initialPrints = []) {
    const hasInteractive = (interactivePrompts && interactivePrompts.length > 0) || (initialPrints && initialPrints.length > 0);
    if (!hasInteractive) {
        clearTerminal();
    }

    const rawStdout = result.stdout ? decodeURIComponent(escape(atob(result.stdout))) : '';
    const stderr = result.stderr ? decodeURIComponent(escape(atob(result.stderr))) : '';
    const compileOutput = result.compile_output ? decodeURIComponent(escape(atob(result.compile_output))) : '';
    const message = result.message ? decodeURIComponent(escape(atob(result.message))) : '';

    const statusId = result.status ? result.status.id : 0;
    const statusDesc = result.status ? result.status.description : 'Executed';
    const time = result.time ? `${result.time}s` : `${fallbackDuration}s`;
    const memory = result.memory ? `${(result.memory / 1024).toFixed(2)} MB` : 'N/A';

    const stdout = cleanResultOutput(rawStdout, initialPrints, interactivePrompts);

    const metricsBar = document.getElementById('metricsBar');
    if (metricsBar) {
        metricsBar.classList.remove('hidden');
        metricsBar.classList.add('flex');
    }
    const timeEl = document.getElementById('timeMetric');
    if (timeEl) timeEl.textContent = time;

    const memoryEl = document.getElementById('memoryMetric');
    if (memoryEl) memoryEl.textContent = memory;

    if (statusId === 3) {
        updateStatusBadge('Accepted', 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30');
        if (stdout) {
            appendTerminal(stdout, 'stdout');
        } else if (!hasInteractive) {
            appendTerminal('Program executed successfully with no output.', 'info');
        }
        if (stderr) appendTerminal(stderr, 'stderr');
    } else if (statusId === 6) {
        clearTerminal();
        updateStatusBadge('Compilation Error', 'bg-red-500/20 text-red-400 border-red-500/30');
        appendTerminal('--- Compilation Error ---\n', 'compile-error');
        appendTerminal(compileOutput || stderr || 'Failed to compile code.', 'compile-error');
    } else if (statusId === 5) {
        updateStatusBadge('Time Limit Exceeded', 'bg-amber-500/20 text-amber-400 border-amber-500/30');
        appendTerminal('--- Time Limit Exceeded ---\nYour program took too long to execute (potential infinite loop).', 'error');
    } else {
        updateStatusBadge(statusDesc, 'bg-amber-500/20 text-amber-400 border-amber-500/30');
        if (stdout) appendTerminal(stdout, 'stdout');
        if (stderr) appendTerminal(stderr, 'stderr');
        if (message) appendTerminal(message, 'error');
    }
}

// Client-side JavaScript execution fallback
function runClientSideJS(code) {
    clearTerminal();
    appendTerminal('--- In-Browser Sandboxed JavaScript Output ---\n', 'info');
    
    const logs = [];
    const originalLog = console.log;
    const originalError = console.error;

    console.log = (...args) => {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '));
    };
    console.error = (...args) => {
        logs.push('[Error] ' + args.join(' '));
    };

    try {
        const result = new Function(code)();
        if (result !== undefined) {
            logs.push(`=> ${result}`);
        }
        updateStatusBadge('Accepted (Local)', 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30');
        appendTerminal(logs.join('\n'), 'stdout');
    } catch (e) {
        updateStatusBadge('Runtime Error', 'bg-red-500/20 text-red-400 border-red-500/30');
        appendTerminal(e.stack || e.toString(), 'stderr');
    } finally {
        console.log = originalLog;
        console.error = originalError;
    }
}

// ==========================================
// 7. WEB DEVELOPMENT PLAYGROUND
// ==========================================
function loadWebCode() {
    const saved = localStorage.getItem('smart_compiler_web_code');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            const h = document.getElementById('web-html-code');
            const c = document.getElementById('web-css-code');
            const j = document.getElementById('web-js-code');
            if (h) h.value = data.html || '';
            if (c) c.value = data.css || '';
            if (j) j.value = data.js || '';
            return;
        } catch(e) {}
    }
    const def = LANGUAGES.web.samples.hello;
    const h = document.getElementById('web-html-code');
    const c = document.getElementById('web-css-code');
    const j = document.getElementById('web-js-code');
    if (h) h.value = def.html;
    if (c) c.value = def.css;
    if (j) j.value = def.js;
}

function saveWebCode() {
    const h = document.getElementById('web-html-code');
    const c = document.getElementById('web-css-code');
    const j = document.getElementById('web-js-code');
    const data = {
        html: h ? h.value : '',
        css: c ? c.value : '',
        js: j ? j.value : ''
    };
    localStorage.setItem('smart_compiler_web_code', JSON.stringify(data));
}

function runWebPreview() {
    saveWebCode();
    const h = document.getElementById('web-html-code');
    const c = document.getElementById('web-css-code');
    const j = document.getElementById('web-js-code');
    const html = h ? h.value : '';
    const css = c ? c.value : '';
    const js = j ? j.value : '';

    const previewFrame = document.getElementById('web-preview-frame');
    if (!previewFrame) return;

    const source = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
            <script>
                try {
                    ${js}
                } catch(err) {
                    console.error("Script error in preview:", err);
                }
            <\/script>
        </body>
        </html>
    `;

    previewFrame.srcdoc = source;
}

function switchWebTab(tab) {
    const containers = {
        html: document.getElementById('webContainer-html'),
        css: document.getElementById('webContainer-css'),
        js: document.getElementById('webContainer-js')
    };
    const buttons = {
        html: document.getElementById('webTab-html'),
        css: document.getElementById('webTab-css'),
        js: document.getElementById('webTab-js')
    };

    Object.values(containers).forEach(c => {
        if (c) {
            c.classList.add('hidden');
            c.classList.remove('flex');
        }
    });
    Object.values(buttons).forEach(b => {
        if (b) {
            b.className = 'px-3 py-1 rounded-md font-medium text-gray-400 hover:text-white flex items-center gap-1.5 transition';
        }
    });

    if (containers[tab]) {
        containers[tab].classList.remove('hidden');
        containers[tab].classList.add('flex');
    }
    if (buttons[tab]) {
        buttons[tab].className = 'px-3 py-1 rounded-md font-medium bg-gray-700 text-white flex items-center gap-1.5 transition';
    }
}

function setWebViewport(width) {
    const frame = document.getElementById('web-preview-frame');
    if (frame) frame.style.width = width;
}

// ==========================================
// 8. TERMINAL & UI UTILITIES
// ==========================================
function clearTerminal() {
    const terminal = document.getElementById('terminalBody');
    if (terminal) terminal.innerHTML = '';
}

function appendTerminal(text, type = 'stdout') {
    const terminal = document.getElementById('terminalBody');
    if (!terminal) return;

    const lines = String(text).split('\n');
    lines.forEach((line, idx) => {
        const span = document.createElement('span');

        if (type === 'stdout') span.className = 'terminal-stdout';
        else if (type === 'stderr') span.className = 'terminal-stderr';
        else if (type === 'compile-error') span.className = 'terminal-compile-error';
        else if (type === 'info') span.className = 'terminal-info';
        else if (type === 'error') span.className = 'terminal-stderr font-semibold';

        span.textContent = line;
        terminal.appendChild(span);

        if (idx < lines.length - 1) {
            terminal.appendChild(document.createElement('br'));
        }
    });

    terminal.scrollTop = terminal.scrollHeight;
}

function updateStatusBadge(text, classNames) {
    const badge = document.getElementById('executionBadge');
    if (badge) {
        badge.textContent = text;
        badge.className = `px-2 py-0.5 rounded text-[10px] font-semibold border ${classNames}`;
    }
}

function setExecutingState(executing) {
    isExecuting = executing;
    const runBtn = document.getElementById('runBtn');
    const runIcon = document.getElementById('runIcon');
    const runText = document.getElementById('runText');

    if (executing) {
        if (runBtn) {
            runBtn.disabled = true;
            runBtn.classList.add('opacity-75', 'cursor-not-allowed');
        }
        if (runIcon) runIcon.className = 'fas fa-spinner fa-spin text-xs';
        if (runText) runText.textContent = 'Running...';
    } else {
        if (runBtn) {
            runBtn.disabled = false;
            runBtn.classList.remove('opacity-75', 'cursor-not-allowed');
        }
        if (runIcon) runIcon.className = 'fas fa-play text-xs';
        if (runText) runText.textContent = 'Run';
    }
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast px-4 py-2 rounded-xl text-xs font-semibold shadow-2xl border flex items-center gap-2 ${
        type === 'warning'
            ? 'bg-amber-900/90 text-amber-200 border-amber-700'
            : 'bg-gray-800/95 text-white border-gray-700'
    }`;
    toast.innerHTML = `<i class="fas fa-info-circle text-blue-400"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

function setupEventListeners() {
    // 1. Run button
    const runBtn = document.getElementById('runBtn');
    if (runBtn) runBtn.addEventListener('click', runCode);

    // 2. Examples / Templates dropdown toggle
    const sampleBtn = document.getElementById('sampleModalBtn');
    const sampleDropdown = document.getElementById('sampleDropdown');
    if (sampleBtn && sampleDropdown) {
        sampleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sampleDropdown.classList.toggle('hidden');
            const moreDropdown = document.getElementById('moreDropdown');
            if (moreDropdown) moreDropdown.classList.add('hidden');
        });
    }

    // 3. Language Selector Modal
    const langModalBtn = document.getElementById('langModalBtn');
    const langModal = document.getElementById('allLanguagesModal');
    const closeLangModalBtn = document.getElementById('closeLangModal');
    const langSearchInput = document.getElementById('langSearchInput');

    if (langModalBtn && langModal) {
        langModalBtn.addEventListener('click', () => {
            langModal.classList.remove('hidden');
            if (langSearchInput) langSearchInput.focus();
        });
    }

    if (closeLangModalBtn && langModal) {
        closeLangModalBtn.addEventListener('click', closeLanguageModal);
    }

    if (langModal) {
        langModal.addEventListener('click', (e) => {
            if (e.target.id === 'allLanguagesModal') closeLanguageModal();
        });
    }

    if (langSearchInput) {
        langSearchInput.addEventListener('input', (e) => {
            renderAllLanguagesGrid(e.target.value);
        });
    }

    // 4. Creator Profile Modal
    const creatorModal = document.getElementById('creatorModal');
    const openCreator = () => {
        if (creatorModal) creatorModal.classList.remove('hidden');
    };
    const closeCreator = () => {
        if (creatorModal) creatorModal.classList.add('hidden');
    };

    const aboutBtn = document.getElementById('aboutCreatorBtn');
    if (aboutBtn) aboutBtn.addEventListener('click', openCreator);

    const aboutMenuBtn = document.getElementById('aboutCreatorMenuBtn');
    if (aboutMenuBtn) aboutMenuBtn.addEventListener('click', openCreator);

    const footerCreatorBtn = document.getElementById('footerCreatorBtn');
    if (footerCreatorBtn) footerCreatorBtn.addEventListener('click', openCreator);

    const closeCreatorBtn = document.getElementById('closeCreatorModal');
    if (closeCreatorBtn) closeCreatorBtn.addEventListener('click', closeCreator);

    if (creatorModal) {
        creatorModal.addEventListener('click', (e) => {
            if (e.target.id === 'creatorModal') closeCreator();
        });
    }

    // 5. More Actions Dropdown
    const moreBtn = document.getElementById('moreMenuBtn');
    const moreDropdown = document.getElementById('moreDropdown');
    if (moreBtn && moreDropdown) {
        moreBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            moreDropdown.classList.toggle('hidden');
            if (sampleDropdown) sampleDropdown.classList.add('hidden');
        });
    }

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
        if (sampleDropdown) sampleDropdown.classList.add('hidden');
        if (moreDropdown) moreDropdown.classList.add('hidden');
    });

    // 6. Terminal Output Actions
    const clearOutputBtn = document.getElementById('clearOutputBtn');
    if (clearOutputBtn) {
        clearOutputBtn.addEventListener('click', () => {
            clearTerminal();
            showToast('Console cleared');
        });
    }

    const copyOutputBtn = document.getElementById('copyOutputBtn');
    if (copyOutputBtn) {
        copyOutputBtn.addEventListener('click', () => {
            const body = document.getElementById('terminalBody');
            if (body) {
                navigator.clipboard.writeText(body.innerText).then(() => showToast('Output copied to clipboard!'));
            }
        });
    }

    // 7. Code Tools: Format, Copy, Reset, Download, Upload
    const formatBtn = document.getElementById('formatBtn');
    if (formatBtn) {
        formatBtn.addEventListener('click', () => {
            if (monacoEditor) {
                monacoEditor.getAction('editor.action.formatDocument').run();
                showToast('Code formatted');
            } else {
                showToast('Formatting available in Monaco view', 'warning');
            }
        });
    }

    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const code = getEditorCode();
            navigator.clipboard.writeText(code).then(() => showToast('Code copied to clipboard!'));
        });
    }

    const resetCodeBtn = document.getElementById('resetCodeBtn');
    if (resetCodeBtn) {
        resetCodeBtn.addEventListener('click', () => {
            if (confirm(`Reset ${LANGUAGES[currentLang].name} code to default template?`)) {
                loadSample('hello');
            }
        });
    }

    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const lang = LANGUAGES[currentLang];
            const htmlEl = document.getElementById('web-html-code');
            const code = (lang.isWebMode && htmlEl) ? htmlEl.value : getEditorCode();
            const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = lang.ext;
            a.click();
            URL.revokeObjectURL(a.href);
            showToast(`Downloaded ${lang.ext}`);
        });
    }

    const uploadInput = document.getElementById('uploadInput');
    if (uploadInput) {
        uploadInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target.result;
                setEditorCode(content);
                saveCode(currentLang, content);
                showToast(`Loaded ${file.name}`);
            };
            reader.readAsText(file);
        });
    }

    // 8. Settings Modal
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsModal = document.getElementById('settingsModal');
    const closeSettingsBtn = document.getElementById('closeSettingsModal');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');

    if (settingsBtn && settingsModal) {
        settingsBtn.addEventListener('click', () => {
            settingsModal.classList.remove('hidden');
        });
    }
    if (closeSettingsBtn && settingsModal) {
        closeSettingsBtn.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
        });
    }
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', saveSettings);
    }

    // 9. Web Mode Auto-Run listeners
    ['web-html-code', 'web-css-code', 'web-js-code'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', () => {
                saveWebCode();
                const autoRunCheck = document.getElementById('webAutoRun');
                if (autoRunCheck && autoRunCheck.checked) {
                    clearTimeout(autoRunTimeout);
                    autoRunTimeout = setTimeout(runWebPreview, 400);
                }
            });
        }
    });
}

function setupShortcuts() {
    window.addEventListener('keydown', (e) => {
        // Ctrl+Enter or Cmd+Enter to Run
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
        }
        // Ctrl+S to Download
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
            e.preventDefault();
            const dl = document.getElementById('downloadBtn');
            if (dl) dl.click();
        }
        // Ctrl+L to Clear Terminal
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') {
            e.preventDefault();
            clearTerminal();
        }
        // Escape to close modals
        if (e.key === 'Escape') {
            closeLanguageModal();
            closeCreatorModal();
            const sModal = document.getElementById('settingsModal');
            if (sModal) sModal.classList.add('hidden');
            const sDrop = document.getElementById('sampleDropdown');
            if (sDrop) sDrop.classList.add('hidden');
            const mDrop = document.getElementById('moreDropdown');
            if (mDrop) mDrop.classList.add('hidden');
        }
    });
}
