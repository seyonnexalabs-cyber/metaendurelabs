/**
 * METAENDURE LABS - Interactive Web Application Logic
 * Features:
 * - Dynamic Sticky Header with scroll detection
 * - Mobile navigation drawer
 * - Interactive 6-Step Performance System Switcher
 * - Programs filtering tabs
 * - Interactive HYROX Stations explorer
 * - Athlete Target Pace & Zone Calculator
 * - Lead consultation form handler with feedback modal
 * - Smooth scroll and active section spy
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation, Scroll Progress & Active Nav Spy
  const navbar = document.getElementById('navbar');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Scroll progress bar
    if (scrollProgressBar && docHeight > 0) {
      const progressPercent = (scrollY / docHeight) * 100;
      scrollProgressBar.style.width = `${progressPercent}%`;
    }

    // Sticky navbar styling
    if (scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy for desktop navigation
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('data-section') === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // More Dropdown Menu Handler for overflow autohide items
  const moreDropdownBtn = document.getElementById('moreDropdownBtn');
  const moreMenuDropdown = document.getElementById('moreMenuDropdown');

  if (moreDropdownBtn && moreMenuDropdown) {
    moreDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = moreMenuDropdown.classList.toggle('show');
      moreDropdownBtn.setAttribute('aria-expanded', isExpanded);
    });

    document.addEventListener('click', (e) => {
      if (!moreMenuDropdown.contains(e.target) && e.target !== moreDropdownBtn) {
        moreMenuDropdown.classList.remove('show');
        moreDropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });

    moreMenuDropdown.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        moreMenuDropdown.classList.remove('show');
        moreDropdownBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Mobile Drawer & Animated Hamburger Toggle
  if (mobileToggle && mobileDrawer && drawerClose) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
    });

    drawerClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      mobileToggle.classList.remove('active');
    });

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // 2. Performance System Interactive 6 Steps
  const stepData = {
    1: {
      step: 'Step 01',
      title: 'Assess: Deep Diagnostic Baseline',
      subtitle: 'Understand current fitness, lifestyle, metabolic rate, and personal constraints.',
      description: 'We leave nothing to chance. Every athlete begins with a holistic intake covering cardiovascular baselines, lifestyle stress points, past injury histories, metabolic tendencies, and competitive aspirations.',
      deliverables: ['Lactate threshold & aerobic capacity evaluation', 'Lifestyle, sleep, and recovery audit', 'Movement screen & injury risk factor mapping'],
      badge: 'Foundation'
    },
    2: {
      step: 'Step 02',
      title: 'Plan: Precision Calibrated Roadmap',
      subtitle: 'Build a science-backed blueprint tailored uniquely to individual physiology.',
      description: 'Your blueprint is mathematically structured across micro, meso, and macrocycles. Training stress scores (TSS), volume, intensity distribution, and nutritional windows are dialed in.',
      deliverables: ['Personalized periodized training schedule', 'Zone-specific pacing charts (Z1-Z5)', 'Target race fueling and hydration protocol'],
      badge: 'Architecture'
    },
    3: {
      step: 'Step 03',
      title: 'Execute: Disciplined Daily Protocol',
      subtitle: 'Apply structured endurance, strength, nutrition, and mental grit daily.',
      description: 'Consistency is king. Athletes execute targeted workouts integrated with recovery protocols. Every split, cadence, and power output is logged with direct coach feedback.',
      deliverables: ['Daily workout sync via mobile & smart devices', 'Post-session qualitative & heart rate checks', 'Weekly coach review & technique analysis'],
      badge: 'Consistency'
    },
    4: {
      step: 'Step 04',
      title: 'Adapt: Dynamic Feedback Calibration',
      subtitle: 'Review performance data in real-time and continuously refine the strategy.',
      description: 'Rigid plans fail; adaptable frameworks excel. If HRV dips or fatigue accumulates, training load is recalibrated instantly to avoid overtraining and injury.',
      deliverables: ['Bi-weekly biometric & HRV trend analysis', 'Active workload recalibration', 'Nutrition and electrolyte adjustments'],
      badge: 'Evolution'
    },
    5: {
      step: 'Step 05',
      title: 'Achieve: Race Day & Peak Milestone',
      subtitle: 'Deliver measurable breakthroughs, podiums, and personal best records.',
      description: 'The culmination of science, mindset, and physical endurance. Step onto the race course with unflinching confidence and execute your race plan with clinical clarity.',
      deliverables: ['Pre-race taper and carbo-loading schedule', 'Race-day pacing & split card', 'Post-race debrief & performance analytics'],
      badge: 'Mastery'
    },
    6: {
      step: 'Step 06',
      title: 'Evolve: Lifelong High Performance',
      subtitle: 'Create enduring habits that drive perpetual growth in sport, career, and life.',
      description: 'Finishing a race is not the destination. It is the proof of your capacity. We leverage the mental toughness forged in training to elevate your leadership, life, and next athletic horizon.',
      deliverables: ['Annual athletic trajectory planning', 'Long-term metabolic & longevity maintenance', 'Alumni community & high-performer network access'],
      badge: 'Perpetual Growth'
    }
  };

  const stepBtns = document.querySelectorAll('.system-step-btn');
  const stepContainer = document.getElementById('stepDetailContainer');

  const updateStepView = (stepIndex) => {
    const data = stepData[stepIndex];
    if (!data || !stepContainer) return;

    stepBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-step') === String(stepIndex));
    });

    stepContainer.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <span class="section-badge" style="margin-bottom: 0;">${data.step}</span>
          <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--neon-green); font-weight: 700;">${data.badge}</span>
        </div>
        <h3 style="font-size: 1.85rem; margin-bottom: 0.75rem; color: #FFFFFF;">${data.title}</h3>
        <p style="font-size: 1.05rem; color: var(--neon-green); margin-bottom: 1rem; font-weight: 500;">${data.subtitle}</p>
        <p style="color: var(--text-secondary); margin-bottom: 1.75rem; line-height: 1.7;">${data.description}</p>
        
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.25rem;">
          <h5 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.75rem;">System Outputs & Deliverables:</h5>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
            ${data.deliverables.map(item => `
              <li style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.92rem; color: var(--text-primary);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div style="position: relative;">
        <div style="background: linear-gradient(135deg, rgba(168, 23, 41, 0.25) 0%, rgba(118, 192, 67, 0.15) 100%); border: 1px solid var(--border-glow); border-radius: 16px; padding: 2rem; text-align: center;">
          <div style="font-family: var(--font-mono); font-size: 3.5rem; font-weight: 700; color: var(--neon-green); line-height: 1; margin-bottom: 0.5rem;">
            0${stepIndex}
          </div>
          <div style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: #FFFFFF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;">
            ${data.title.split(':')[0]} Phase
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            Part of the METAENDURE <strong>Endure &rarr; Evolve &rarr; Excel</strong> progression engine.
          </p>
          <a href="#calculator" class="btn btn-outline" style="width: 100%; font-size: 0.85rem; padding: 0.75rem 1rem;">
            Calculate Your Baseline
          </a>
        </div>
      </div>
    `;
  };

  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.getAttribute('data-step');
      updateStepView(idx);
    });
  });

  // 3. Program Tabs Filter
  const programTabs = document.querySelectorAll('.programs-tabs .tab-btn');
  const programCards = document.querySelectorAll('.program-card');

  programTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      programTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      programCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Interactive Athlete Pace & Zone Calculator
  const calcForm = document.getElementById('paceCalculatorForm');
  const paceDisplay = document.getElementById('paceResultDisplay');
  const speedDisplay = document.getElementById('speedResultDisplay');
  const zoneEasyDisplay = document.getElementById('zoneEasyDisplay');
  const zoneTempoDisplay = document.getElementById('zoneTempoDisplay');
  const zoneThresholdDisplay = document.getElementById('zoneThresholdDisplay');

  const calculateZones = () => {
    const distanceKm = parseFloat(document.getElementById('calcDistance').value) || 10;
    const hours = parseInt(document.getElementById('calcHours').value) || 0;
    const minutes = parseInt(document.getElementById('calcMinutes').value) || 45;
    const seconds = parseInt(document.getElementById('calcSeconds').value) || 0;

    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    if (totalSeconds <= 0 || distanceKm <= 0) return;

    // Seconds per km
    const secPerKm = totalSeconds / distanceKm;
    const paceMin = Math.floor(secPerKm / 60);
    const paceSec = Math.round(secPerKm % 60);
    const paceStr = `${paceMin}:${paceSec < 10 ? '0' : ''}${paceSec} /km`;

    // Speed in km/h
    const speedKmh = ((distanceKm / (totalSeconds / 3600))).toFixed(1);

    // Zone approximations based on standard Daniels / VDOT percentages
    // Easy (Zone 2): 118% - 128% of threshold pace
    const easyPaceSec = secPerKm * 1.22;
    const easyMin = Math.floor(easyPaceSec / 60);
    const easySec = Math.round(easyPaceSec % 60);

    // Tempo (Zone 3): 106% - 112%
    const tempoPaceSec = secPerKm * 1.08;
    const tempoMin = Math.floor(tempoPaceSec / 60);
    const tempoSec = Math.round(tempoPaceSec % 60);

    // Threshold / Interval (Zone 4/5): 94% - 98%
    const intervalPaceSec = secPerKm * 0.94;
    const intMin = Math.floor(intervalPaceSec / 60);
    const intSec = Math.round(intervalPaceSec % 60);

    if (paceDisplay) paceDisplay.textContent = paceStr;
    if (speedDisplay) speedDisplay.textContent = `${speedKmh} km/h`;
    if (zoneEasyDisplay) zoneEasyDisplay.textContent = `${easyMin}:${easySec < 10 ? '0' : ''}${easySec} /km`;
    if (zoneTempoDisplay) zoneTempoDisplay.textContent = `${tempoMin}:${tempoSec < 10 ? '0' : ''}${tempoSec} /km`;
    if (zoneThresholdDisplay) zoneThresholdDisplay.textContent = `${intMin}:${intSec < 10 ? '0' : ''}${intSec} /km`;
  };

  if (calcForm) {
    calcForm.addEventListener('input', calculateZones);
    calculateZones();
  }

  // 5. Contact Consultation Form Handler
  const contactForm = document.getElementById('consultationForm');
  const toastNotification = document.getElementById('toastNotification');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<span>Transmitting to Lab...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = `<span>Application Received ✓</span>`;
        contactForm.reset();

        if (toastNotification) {
          toastNotification.classList.add('show');
          setTimeout(() => {
            toastNotification.classList.remove('show');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }, 4500);
        }
      }, 900);
    });
  }

  // 6. Smooth Scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navOffset = 75;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initialize initial step view
  updateStepView(1);
});
