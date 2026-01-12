/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Subscription request type for /api/subscribe
 */
export interface SubscribeRequest {
  email: string;
}

/**
 * Subscription response type for /api/subscribe
 */
export interface SubscribeResponse {
  success: boolean;
  message: string;
}
