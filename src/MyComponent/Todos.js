import React from 'react'
import './Tod.css';
import S from './S.gif';
const Todos = () => {
    return (
        <div className="container">
        <p>
        SWARM ALGORITHM
        </p>
        <hr class="dashed"/>
        <body className="content">
        <img src={S} className="App-logo" alt="logo"></img>
        <hr class="dotted"/>
        <div className="about">
        <div className="what"><h3>What is Swarm Algorithm</h3></div>
        Swarm Algorithm is the collective behavior of decentralized, self-organized systems, natural or artificial. The concept is employed in work on artificial intelligence. The expression was introduced by Gerardo Beni and Jing Wang in 1989, in the context of cellular robotic systems.
        SI systems consist typically of a population of simple agents or boids interacting locally with one another and with their environment. The inspiration often comes from nature, especially biological systems. The agents follow very simple rules, and although there is no centralized control structure dictating how individual agents should behave, local, and to a certain degree random, interactions between such agents lead to the emergence of "intelligent" global behavior, unknown to the individual agents.[4] Examples of swarm intelligence in natural systems include ant colonies, bee colonies, bird flocking, hawks hunting, animal herding, bacterial growth, fish schooling and microbial intelligence.
        The application of swarm principles to robots is called swarm robotics while swarm intelligence refers to the more general set of algorithms. Swarm prediction has been used in the context of forecasting problems. Similar approaches to those proposed for swarm robotics are considered for genetically modified organisms in synthetic collective intelligence.
        </div>
        <hr class="dotted"/>
        <div className="why"><h3>Why We need Swarm Algorithm</h3></div> 
        <div className="imp">
        Swarm Intelligence Algorithms
        This section introduces several SI-based algorithms, highlighting their notable variants, their merits and demerits, and their applications. These algorithms include Genetic Algorithms (GA), Ant Colony Optimization (ACO), Particle Swarm Optimization (PSO).<br/>
       <h4>1) Genetic Algorithm</h4>
        The Genetic Algorithm (GA) introduced by John Holland in 1975 [2, 3], is a search optimization algorithm based on the mechanics of the natural selection process. The basic concept of this algorithm is to mimic the concept of the ‘survival of the fittest’; it simulates the processes observed in a natural system where the strong tends to adapt and survive while the weak tends to perish.<br/>
        <h4>2)Ant Colony Optimization</h4>
        Ant Colony Optimization (ACO) is a metaheuristic approach inspired by the Ant System (AS) proposed by Marco Dorigo in 1992 in his PhD thesis [23–25]. It is inspired by the foraging behaviour of real ants. This algorithm consists of four main components (ant, pheromone, daemon action, and decentralized control) that contribute to the overall system. Ants are imaginary agents that are used in order to mimic the exploration and exploitation of the search space.<br/>
        <h4>3)Particle Swarm Optimization</h4>
        Particle Swarm Optimization (PSO) is an optimization technique introduced by Kennedy and Eberhart in 1995 [39]. It uses a simple mechanism that mimics swarm behaviour in birds flocking and fish schooling to guide the particles to search for global optimal solutions. Del Valle and his co-authors [40] described PSO with three simple behaviours of separation, alignment, and cohesion as shown in Fig 3 respectively. Separation is the behaviour of avoiding the crowded local flockmates while alignment is the behaviour of moving towards the average direction of local flockmates.<br/>
        </div>
        </body>
        </div>
    )
}

export default Todos
