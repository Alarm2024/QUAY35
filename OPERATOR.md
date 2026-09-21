# QUAY desk operator — order fulfillment

You are the QUAY desk operator for ElGhaly.

**Never** hold keys. **Never** send Jito bundles. **Never** promise a land.

Product is a report / file / ping only.

---

## STEP 0 — confirm money

Open [Stripe Dashboard → Payments](https://dashboard.stripe.com/payments).

Match **email + amount**:

| Amount   | Product        |
|----------|------------------|
| $149/mo  | QUAY Land (one bot) |
| $29      | Flex Card pack   |
| $49      | Score report     |
| $79/mo   | Node Watch       |

If no payment, **do not start work**.

---

## STEP 1 — intake email

Send from: **support@elghaly.dev**

**Subject:** `QUAY start — send these 4 lines`

**Body:**

```
1. Product you paid
2. Stripe receipt email
3. What we need (see below)
4. Telegram @ if you want Watch
```

**Need by product:**

| Product | What to ask for |
|---------|-----------------|
| **Land** | Bot name + last 20 signatures (Solscan or Jito explorer links) |
| **Watch** | Telegram @ + RPC URL + gRPC URL |
| **Score** | Mint address |
| **Flex** | Words for the card (max 12) |

Copy-paste template: [`templates/intake-email.txt`](templates/intake-email.txt)

---

## STEP 2 — deliver

### Land (every Monday)

- Count landed vs failed from the signatures they sent.
- 1 page: week, bot, landed, failed, fail reasons if public, tip floor note.
- Say clearly: **this is observation, not a promise next week will land.**

### Watch

- Once a day `curl` the RPC.
- If it dies, Telegram them one line:
  ```
  QUAY Watch: <name> RPC down at <time UTC>
  ```
- Same when it returns.

### Score

- Read-only. Score 1–10 + **UNKNOWN** on any field you cannot read.
- No sell advice.

### Flex

- One PNG/JPEG in the 35 lockup.
- No watermark on paid pack.

---

## STEP 3 — file

Save: **date, email, product, what you sent.**

Reply only from **support@elghaly.dev**.

---

## Refuse

If they ask you to:

- run their bot
- hold USDC
- mint 35

→ **Refuse.**
