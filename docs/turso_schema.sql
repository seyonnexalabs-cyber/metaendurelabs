-- =========================================================================
-- METAENDURE LABS - TURSO SQL SCHEMA & SEED DATA
-- Run this in Turso CLI or Web Shell (https://turso.tech)
-- =========================================================================

-- 1. SCHEDULES TABLE
CREATE TABLE IF NOT EXISTS schedules (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    coach TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'run', -- 'run', 'hyrox', 'lab', 'physio', 'virtual'
    location TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'confirmed',
    capacity_current INTEGER DEFAULT 0,
    capacity_max INTEGER DEFAULT 15,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Seed Starter Training Session
INSERT OR IGNORE INTO schedules (
    id, title, date, time, coach, type, location, status, capacity_current, capacity_max
) VALUES (
    'sess-kanteerava-oct31',
    'Outdoor Running & Form Workshop',
    '31st October 2026',
    '06:00 AM - 07:30 AM',
    'Sujai S',
    'run',
    'Kanteerava Stadium (400m Track)',
    'confirmed',
    8,
    20
);

-- 2. PLAIN USERS TABLE (SQLite syntax)
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'athlete', -- 'admin' or 'athlete'
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Seed Admins and Demo Athlete
INSERT OR REPLACE INTO users (id, username, email, password, name, role)
VALUES
    ('usr-sujai', 'sujai', 'sujai@metaendurelabs.com', 'Sujai#Meta2026', 'Coach Sujai Sivan', 'admin'),
    ('usr-snygda', 'snygda', 'snygda@gmail.com', 'adminsujai', 'Admin Sony Gowda', 'admin'),
    ('usr-seyon', 'seyonnexalabs', 'seyonnexalabs@gmail.com', 'adminsujai', 'Seyon Nexa Labs Admin', 'admin'),
    ('usr-athlete', 'athlete_demo', 'athlete@metaendurelabs.com', 'athlete123', 'Demo Athlete (Vijay)', 'athlete');
