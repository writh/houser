CREATE TABLE "houses"(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state VARCHAR(2) NOT NULL,
    zip NUMERIC(5, 0) NOT NULL,
    image TEXT,
    mortgage NUMERIC,
    rent NUMERIC
);