package jumpshoot;





public class Robot {
	 	
		private int centerX = 100;
		private int centerY = 382;
		private boolean jumped = false;
	
		private int speedX = 0;
		private int speedY = 1;

		public void update() {

			// Update der X-Position
			centerX += speedX; 
			
 			// Update der Y-Position
 			if (centerY + speedY >= 382) {
				centerY = 382;
				// 382 bedeutet, die Figur steht auf dem Boden.
			}else{                       
			 centerY += speedY; 
		         // Addiert speedY zu centerY, um die neue Position zu berechnen.
			  }

			// Hier wird das Springen kontrolliert.
			if (jumped == true) {
				speedY += 1; // Solange die Figur in der Luft ist, addiere 1.
				// Dadurch fällt die Figur auf den Boden.

				if (centerY + speedY >= 382) {
					centerY = 382;
					speedY = 0;
					jumped = false;
				}

			}

			// Verhindert, dass die Spielfigur einen gewissen Punkt
			// in X-Richtung überschreitet.
			
			//links
			if (centerX + speedX <= 60) {  
				centerX = 61;
			}
			
			//rechts
			if (centerX + speedX >= 740){  
				centerX = 739; 
			}
		
		
		}
		
		public void moveRight() {
			speedX = 6;
		}

		public void moveLeft() {
			speedX = -6;
		}

		public void stop() {
			speedX = 0;
		}

		public void jump() {
			if (jumped == false) {
				speedY = -20;
				jumped = true;
			}
		}

		public int getCenterX() {
			return centerX;
		}

		public int getCenterY() {
			return centerY;
		}

		public boolean isJumped() {
			return jumped;
		}

		public int getSpeedX() {
			return speedX;
		}

		public int getSpeedY() {
			return speedY;
		}

		public void setCenterX(int centerX) {
			this.centerX = centerX;
		}

		public void setCenterY(int centerY) {
			this.centerY = centerY;
		}

		public void setJumped(boolean jumped) {
			this.jumped = jumped;
		}

		public void setSpeedX(int speedX) {
			this.speedX = speedX;
		}

		public void setSpeedY(int speedY) {
			this.speedY = speedY;
		}

		
}