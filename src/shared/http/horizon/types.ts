export interface Account {
    _links: Links
    id: string
    account_id: string
    sequence: string
    sequence_ledger: number
    sequence_time: string
    subentry_count: number
    last_modified_ledger: number
    last_modified_time: string
    thresholds: Thresholds
    flags: Flags
    balances: Balance[]
    signers: Signer[]
    data: Data2
    num_sponsoring: number
    num_sponsored: number
    paging_token: string
  }
  
  export interface Links {
    self: Self
    transactions: Transactions
    operations: Operations
    payments: Payments
    effects: Effects
    offers: Offers
    trades: Trades
    data: Data
  }
  
  export interface Self {}
  
  export interface Transactions {
    href: string
    templated: boolean
  }
  
  export interface Operations {
    href: string
    templated: boolean
  }
  
  export interface Payments {
    href: string
    templated: boolean
  }
  
  export interface Effects {
    href: string
    templated: boolean
  }
  
  export interface Offers {
    href: string
    templated: boolean
  }
  
  export interface Trades {
    href: string
    templated: boolean
  }
  
  export interface Data {
    href: string
    templated: boolean
  }
  
  export interface Thresholds {
    low_threshold: number
    med_threshold: number
    high_threshold: number
  }
  
  export interface Flags {
    auth_required: boolean
    auth_revocable: boolean
    auth_immutable: boolean
    auth_clawback_enabled: boolean
  }
  
  export interface Balance {
    balance: string
    buying_liabilities: string
    selling_liabilities: string
    asset_type: string
  }
  
  export interface Signer {
    weight: number
    key: string
    type: string
  }
  
  export interface Data2 {}
  