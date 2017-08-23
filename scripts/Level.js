class Level {
	constructor() {
			this.player = null;
			this.enemies = [];

			this.scope = 0;
			this.health = 10;

			this.levelState = true; // Level runned
	}

	static getLevel(levelNumber) {
		if(typeof(levelNumber) != 'number') 
			throw new TypeError("Level.getLevel(<Number>) неверный тип параметра 'levelNumber'"); 

			var level = new Level();
			if(levelNumber == 1) {
				level.player = {};
			}

			return level;
	}

	static createEnemy(levelNumber, enemyType = 1) {
		var enemy = new Enemy();
		if(levelNumber == 1) {
			enemy.setType(enemyType);
		}
		return enemy;
	}
}
